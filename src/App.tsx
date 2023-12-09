import { useEffect, useRef } from 'react'
import { Route, RouterProvider, Routes, useNavigate } from 'react-router-dom'
// createGlobalStyle нужен для создания глобальных стилей
import styled, { createGlobalStyle } from 'styled-components'

import { HeaderApp } from '@components'
import { ContactsPage, SchedulePage } from '@pages'
import { router } from '@routes'
import { AssistantAppState, createAssistant, createSmartappDebugger } from '@salutejs/client'
// получаем стилевые объекты для нашего интерфейса
// получаем цвета для нашего интерфейса
import { background, body1, gradient, text } from '@salutejs/plasma-tokens'
// получаем тему персонажа
import { salutejs_sber__dark } from '@salutejs/plasma-tokens/themes'
// получаем значение для целевой платформы
import { sberBox } from '@salutejs/plasma-tokens/typo'
import { Container, DeviceThemeProvider, Row } from '@salutejs/plasma-ui'
import { detectDevice } from '@salutejs/plasma-ui/utils'
import ScheduleStore from '@store/ScheduleStore'
import { prepareGroupNumber } from '@utils/helpers'

const AppStyled = styled.div`
  padding: 30px;
  margin-bottom: 0px;
  ${body1}
  color: ${text};
  background-color: ${background};
  background-image: ${gradient};
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
const DocumentStyle = createGlobalStyle`
    html {
        color: ${text};
        background-color: ${background};
        background-image: ${gradient};
    }
`
// создаем react-компонент для персонажа
const Theme = createGlobalStyle(salutejs_sber__dark)

const App = () => {
  console.log(detectDevice())

  return (
    <AppStyled>
      {/* Используем глобальные react-компоненты один раз */}
      {/* <DocumentStyle />
      <Theme />
      <TypoScale /> */}
      <DocumentStyle />
      <Theme />
      <TypoScale />
      <DeviceThemeProvider theme={Theme} detectDeviceCallback={detectDevice}>
        {/* <App /> */}
        <RouterProvider router={router} />
      </DeviceThemeProvider>
    </AppStyled>
  )
}

export default App
