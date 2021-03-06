import React, { useState, useRef } from "react";
import { Form } from '@unform/web';
import { ValidationError } from "yup";
// @ts-ignore
// import StepWizard from 'react-step-wizard';

// Components
import Select from "../Select"
import BoxMessage from "../BoxMessage"

// @ts-ignore
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Container } from './styles';

// Utils
import ICalendar from "../../utils/types/calendar";
import DebounceFunction from "../../utils/debounce";
import SchemaSchedule from "../../utils/Schedule";
import SchedulingResult from "./Result"

// Services
import axios from "../../services/axios"

const Schedule: React.FC = () => {
  const [ daySelected, setDaySelected ] = useState<ICalendar>({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDay()
  })
  const [ scheduling, setScheduling ] = useState<Object>()
  const [ boxMessage, setBoxMessage ] = useState<any>()

  const formRef = useRef(null)

  function handlerSetNewDate(newDate: ICalendar) {
    setDaySelected(newDate)
    // @ts-ignore
    setScheduling(new Date(`${daySelected.day}`, `${daySelected.month}`, `${daySelected.year}`)
    )
  }

  async function handlerCreateNewScheduling(dataForm: any) {
    try {
      const dataScheduling = {
        ...dataForm,
        id_user: "5f677415130ed11f48d84fbd",
        phone: "5511963092396",
        date_schedule: `${daySelected.day}/${daySelected.month}/${daySelected.year}`,
        qrcode: "HP9264"
      }

      await SchemaSchedule.validate(dataScheduling, { abortEarly: false, })

      const response = await axios.post("/schedule/create", dataScheduling)

      // @ts-ignore
      if (response?.data.code !== 200) {
        handlerRemoveListeners()
        // @ts-ignore
        setBoxMessage({ message: response?.data?.error })
        return
      }

      // @ts-ignore
      setScheduling(dataScheduling);
      handlerRemoveListeners()
      handlerSetScroll()
    } catch (error) {
      if (error instanceof ValidationError) {
        const validationErrors = {}
        error.inner.forEach(er => {
          // @ts-ignore
          validationErrors[ er.path ] = er.message;
        });
        // @ts-ignore
        formRef.current.setErrors(validationErrors);
        handlerRemoveError()
      } else {
        // @ts-ignore
        setBoxMessage({ title: "Houve um erro inesperado", message: error?.message })
      }
    }
  }

  function handlerCloseBoxMessage() {
    setBoxMessage({})
    setScheduling({})
  }

  function handlerRemoveError() {
    // @ts-ignore
    document.querySelectorAll('select').forEach(item => {
      item.addEventListener("change", () => {
        // @ts-ignore
        item.classList.remove("select_error")
      })
    })
  }

  function handlerRemoveListeners() {
    // @ts-ignore
    document.querySelectorAll('select').forEach(item => {
      item.removeEventListener("change", (event) => { })
    })
  }

  function handlerSetScroll() {
    window.scrollTo({
      top: 0
    })
  }
  return <>
    {
      scheduling && (
        <SchedulingResult
          // @ts-ignore
          data={scheduling?.date_schedule}
          // @ts-ignore
          local={scheduling?.local}
          // @ts-ignore
          prof={scheduling?.name_responsible}
        />
      )
    }
    {
      boxMessage?.message &&
      (<BoxMessage title={boxMessage?.title} message={boxMessage?.message} callback={handlerCloseBoxMessage} />)
    }
    <Container>
      <div className={'header'}>
        <h1>Agendamento</h1>
        <p>Preencha os campos e  acesse os horários disponíveis</p>
      </div>
      <Form
        className={'form-group'}
        onSubmit={data => DebounceFunction(handlerCreateNewScheduling, 100, true, data)}
        ref={formRef}
      >
        <Select name="specialty">
          <option value="">Especialidade:</option>
          <option value="Dentista">Dentista</option>
          <option value="Fonoaudiólogo">Fonoaudiólogo</option>
          <option value="Fisioterapeuta">Fisioterapeuta</option>
          <option value="Ginecologista">Ginecologista</option>
          <option value="Nutricionista">Nutricionista</option>
          <option value="Psicólogo">Psicólogo</option>
          <option value="Quiropraxista">Nutricionista</option>
          <option value="Terapeuta Ocupacional">Terapeuta Ocupacional</option>
        </Select>
        <Select name="local">
          <option value="">Clínica:</option>
          <option value="SUS">SUS</option>
          <option value="Clínica Sua Saúde">Clínica Sua Saúde</option>
          <option value="Centro de Psicologia">Centro de Psicologia</option>
          <option value="Clínica SJR">Clínica SJR</option>
          <option value="CAE">CAE</option>
          <option value="Psicólogo">Psicólogo</option>
          <option value="Quiropraxista">Nutricionista</option>
          <option value="Terapeuta Ocupacional">Terapeuta Ocupacional</option>
        </Select>
        <Select name="name_responsible">
          <option value="">Profissional:</option>
          <option value="Maria Souza">Maria Souza</option>
          <option value="Jorge Blando">Jorge Blando</option>
        </Select>

        <p>Escolha a data e horário da sua consulta</p>

        <Calendar
          //@ts-ignore 
          value={daySelected}
          shouldHighlightWeekends
          onChange={newDate => DebounceFunction(handlerSetNewDate, 10, false, newDate)}
        />
        <button className={'btn-default'}>
          Continuar
        </button>
      </Form>
    </Container>
  </>
}

export default Schedule;