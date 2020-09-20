import React from "react";
import { Link } from 'react-router-dom';

// @ts-ignore
// import StepWizard from 'react-step-wizard';

// @ts-ignore
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Container } from './styles';

const Schedule: React.FC = () => {

  return (
    <Container>
      <div className={'header'}>
        <h1>Agendamento</h1>
        <p>Preencha os campos e  acesse os horários disponíveis</p>
      </div>



      <form className={'form-group'}>
        <select>
          <option value="">Especialidade:</option>
          <option value="Dentista">Dentista</option>
          <option value="Fonoaudiólogo">Fonoaudiólogo</option>
          <option value="Fisioterapeuta">Fisioterapeuta</option>
          <option value="Ginecologista">Ginecologista</option>
          <option value="Nutricionista">Nutricionista</option>
          <option value="Psicólogo">Psicólogo</option>
          <option value="Quiropraxista">Nutricionista</option>
          <option value="Terapeuta Ocupacional">Terapeuta Ocupacional</option>
        </select>
        <select>
          <option value="">Clínica:</option>
          <option value="SUS">SUS</option>
          <option value="Clínica Sua Saúde<">Clínica Sua Saúde</option>
          <option value="Centro de Psicologia">Centro de Psicologia</option>
          <option value="Clínica SJR">Clínica SJR</option>
          <option value="CAE">CAE</option>
          <option value="Psicólogo">Psicólogo</option>
          <option value="Quiropraxista">Nutricionista</option>
          <option value="Terapeuta Ocupacional">Terapeuta Ocupacional</option>
        </select>
        <select>
          <option value="">Profissional:</option>
          <option value="Maria Souza">Maria Souza</option>
          <option value="Jorge Blando">Jorge Blando</option>
        </select>



        <p>Escolha a data e horário da sua consulta</p>

        <Calendar
          shouldHighlightWeekends
        />

        <Link to={'/schedule/result'}>
          <button className={'btn-default'}>
            Continuar
        </button>
        </Link>
      </form>
    </Container>

  );
}

export default Schedule;