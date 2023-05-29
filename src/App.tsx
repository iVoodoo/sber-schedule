// import './App.css';
// import React from 'react';
// import Header from './components/Header/Header';
// import Schedule from './components/Schedule/Shedule';
// import { Col, Container, Row } from '@sberdevices/plasma-ui';
// import HeaderApp from './components/Header/Header';

// import { Button } from '@salutejs/plasma-ui';

// export default function App() {
//     return (
//         <div className="App">
//             <p>
//                 <Button view="primary">Hello Plasma</Button>
//             </p>
//         </div>
//     );
// }

import React, { useEffect, useRef } from "react"
// createGlobalStyle нужен для создания глобальных стилей
import styled, { createGlobalStyle } from "styled-components"

// получаем значение для целевой платформы
import { sberBox } from "@salutejs/plasma-tokens/typo"
// получаем стилевые объекты для нашего интерфейса
import { body1 } from "@salutejs/plasma-tokens"

// получаем тему персонажа
import { darkJoy } from "@salutejs/plasma-tokens"
// получаем цвета для нашего интерфейса
import { text, background, gradient } from "@salutejs/plasma-tokens"
import HeaderApp from "./components/Header/Header"
import { Container, Row } from "@salutejs/plasma-ui"
import { Routes, Route, useNavigate } from "react-router-dom"
import SchedulePage from "./pages/SchedulePage"
import ContactsPage from "./pages/ContactsPage"
import { AssistantAppState, createAssistant, createSmartappDebugger } from "@salutejs/client"
import ScheduleStore from "@store/ScheduleStore"
import prepareGroupNumber from "@utils/prepareGroupNumber"
// import {
//   createSmartappDebugger,
//   createAssistant,
//   // eslint-disable-next-line no-unused-vars
//   AssistantAppState
// } from "@sberdevices/assistant-client"

const AppStyled = styled.div`
  padding: 30px;
  margin-bottom: 0px;
  background-color: ${background};
  background-image: ${gradient};
  ${body1}
  min-height: 100vh;
`

// создаем react-компонент c глобальными стилями типографики
const TypoScale = createGlobalStyle(sberBox)

// const StyledPreview = styled.div`
//   ${darkJoy[':root']};
//   ${sberBox[':root']};

//   height: 100%;
//   min-height: 100vh;
//   background-image: ${gradient};
// `;

// создаем react-компонент для подложки
const DocStyles = createGlobalStyle`
    /* stylelint-disable-next-line selector-nested-pattern */
    html {
        color: ${text};
        // background-color: ${background};
        // background-image: ${gradient};
        /** необходимо залить градиентом всю подложку */
        min-height: 100vh;
    }
`
// создаем react-компонент для персонажа
const Theme = createGlobalStyle(darkJoy)

// // eslint-disable-next-line no-unused-vars
// const initializeAssistant = () => {
//   if (process.env.NODE_ENV === "development") {
//     return createSmartappDebugger({
//       token: process.env.REACT_APP_TOKEN ?? "",
//       initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`
//     })
//   }

//   return createAssistant()
// }
const initializeAssistant = (getState: any) => {
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? "",
      initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
      getState
    })
  }

  return createAssistant({ getState })
}

const App = () => {
  const assistantStateRef = useRef<AssistantAppState>()
  const assistantRef = useRef<ReturnType<typeof createAssistant>>()
  const navigate = useNavigate()

  useEffect(() => {
    assistantRef.current = initializeAssistant(() => assistantStateRef.current)

    assistantRef.current.on("data", ({ action }: any) => {
      if (action) {
        console.log(action)
        if (action.type === "all") {
          let groupNumber = `${action.group1}${action.group2}`
          navigate("/")
          ScheduleStore.getScheduleData(prepareGroupNumber(groupNumber))
        }
        if (action.type === "today") {
          let groupNumber = `${action.group1}${action.group2}`
          navigate("/")
          ScheduleStore.getScheduleToday(prepareGroupNumber(groupNumber))
        }
        if (action.type === "contacts") {
          navigate("/contacts")
        }
      }
    })
  }, [])
  return (
    <AppStyled>
      {/* Используем глобальные react-компоненты один раз */}
      <TypoScale />
      <DocStyles />
      <Theme />
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <HeaderApp />
        </Row>
        <Routes>
          <Route path="/" element={<SchedulePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<SchedulePage />} />
        </Routes>
        {/* <Row>
                    <Col sizeS={4} sizeM={4} sizeL={4} sizeXL={6} offsetM={1} offsetL={2} offsetXL={3}>
                         <p style={{ marginBottom: '1rem', textAlign:'center'}}>1</p> 
                         <Schedule style={{textAlign:'center'}}/>
                    </Col>
                </Row>*/}
        {/* <Schedule /> */}
      </Container>
    </AppStyled>
  )
}

export default App
