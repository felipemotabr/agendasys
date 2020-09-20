import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Card, Bookmark, ContentBookmark } from './styles';

import IconBookmark from './../../image/bookmark.png';

// Components
import BoxMessage from "../BoxMessage";

// Services
import axios from "../../services/axios"

const Home: React.FC = () => {
  const [ mySchedulings, setMySchedulings ] = useState<Array<Object>>()
  const [ boxMessage, setBoxMessage ] = useState<Object>()

  useEffect(() => {
    async function handlerLoadAllMySchedulings() {
      try {
        const response = await axios.get("/schedule/show/5f677415130ed11f48d84fbd")

        if (response?.data?.code !== 200) {
          setBoxMessage({ title: "Não foi possivel recuperar suas consultas", message: response?.data?.error })
          return;
        }

        setMySchedulings([ ...response?.data?.data ])
      } catch (error) {
        setBoxMessage({ title: "Houve um erro inesperado", message: error?.message })
      }
    }
    handlerLoadAllMySchedulings()
  }, [])

  return <>
    {
      // @ts-ignore
      boxMessage?.message && (
        // @ts-ignore
        <BoxMessage title={boxMessage?.title} message={boxMessage?.message} />
      )
    }
    <Container>
      <h1>Olá, <span>João Silva</span></h1>
      <h2>O que deseja fazer?</h2>

      <Card>
        <Link to={'/currentcode'}>
          <div>Código da Consulta Atual</div>
        </Link>
        <div>Acompanhar </div>
      </Card>
      <Card>
        <Link to={'/calendar'}>
          <div>Agenda</div>
        </Link>
        <Link to={'/schedule'}>
          <div>Agendar Consultas</div>
        </Link>
      </Card>

      <h2>Últimas Consultas</h2>

      <ContentBookmark>
        {
          // @ts-ignore
          mySchedulings?.length > 0 && mySchedulings?.map((bookmark, index) =>
            (<Bookmark key={index}>
              <div className={'icon'}><img src={IconBookmark} alt={''} /></div>
              <div className={'content'}>
                <h1>
                  {
                    // @ts-ignore
                    bookmark?.date_schedule
                  }
                </h1>
                <h2>
                  {
                    // @ts-ignore
                    bookmark?.local
                  }
                </h2>
                <h3>
                  {
                    // @ts-ignore
                    bookmark?.name_responsible
                  }
                </h3>
                <p>
                  Você foi realizar um exame de {" "}
                  {
                    // @ts-ignore
                    bookmark?.specialty
                  }.
                  </p>
              </div>
            </Bookmark>))
        }
      </ContentBookmark>

    </Container>
  </>
}

export default Home;