import {
  getGender,
  getLastnameGender,
  incline,
  inclineFirstname,
  inclineLastname,
  inclineMiddlename
} from 'lvovich'
import { useEffect, useRef } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { HeaderApp } from '@components'
import { RouteLinks } from '@routes'
import { AssistantAppState, createAssistant, createSmartappDebugger } from '@salutejs/client'
import { Col, Container, Row } from '@salutejs/plasma-ui'
import ScheduleStore from '@store/ScheduleStore'
import { prepareGroupNumber } from '@utils/helpers'

export const PageLayout = () => {
  const initializeAssistant = (getState: any) => {
    // if (process.env.NODE_ENV === 'development') {
    //   return createSmartappDebugger({
    //     token: import.meta.env.VITE_REACT_APP_TOKEN ?? '',
    //     initPhrase: `Запусти ${import.meta.env.VITE_REACT_APP_SMARTAPP}`,
    //     getState
    //   })
    // }

    return createAssistant({ getState })
  }
  const assistantStateRef = useRef<AssistantAppState>()
  const assistantRef = useRef<ReturnType<typeof createAssistant>>()
  const navigate = useNavigate()

  useEffect(() => {
    assistantRef.current = initializeAssistant(() => assistantStateRef.current)

    assistantRef.current.on('data', ({ action }: any) => {
      if (action) {
        // console.log(action)
        if (action.type === 'all') {
          const groupNumber = `${action.group1}${action.group2}`
          navigate('/')
          ScheduleStore.getScheduleData(prepareGroupNumber(groupNumber))
        }
        if (action.type === 'today') {
          const groupNumber = `${action.group1}${action.group2}`
          navigate('/')
          ScheduleStore.getScheduleToday(prepareGroupNumber(groupNumber))
        }
        if (action.type === 'contacts') {
          navigate(RouteLinks.CONTACTS)
        }
        // if (action.type === 'teacher') {
        //   navigate(RouteLinks.TEACHERS)
        //   console.log(incline({ first: action.name }, 'nominative'))

        //   // console.log(getGender({ first: action.name, middle: action.patronymic }))

        //   // const nominativeName = incline(
        //   //   {
        //   //     first: action.name,
        //   //     last: action.surname,
        //   //     middle: action.patronymic,
        //   //     gender:
        //   //   },
        //   //   'nominative'
        //   // )

        //   // console.log(nominativeName)
        // }
      }
    })
  }, [])
  return (
    <Container>
      <Row style={{ justifyContent: 'center' }}>
        <HeaderApp />
      </Row>
      <Outlet />
    </Container>
  )
}
