import React, { useRef, useEffect } from "react"
import GroupField from "./GroupField/GroupField"
import ScheduleStore from "@store/ScheduleStore"
import { observer } from "mobx-react-lite"
import FullSchedule from "./FullSchedule/FullSchedule"
import { createSmartappDebugger, createAssistant, AssistantAppState } from "@salutejs/client"

// eslint-disable-next-line no-unused-vars
const initializeAssistant = (getState: any) => {
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? "",
      initPhrase: `Запусти Политех расписание`,
      getState
    })
  }

  return createAssistant({ getState })
}

const Schedule: React.FC = observer(() => {
  const assistantStateRef = useRef<AssistantAppState>()
  const assistantRef = useRef<ReturnType<typeof createAssistant>>()

  useEffect(() => {
    assistantRef.current = initializeAssistant(() => assistantStateRef.current)

    // assistantRef.current.on("data", ({ action }: any) => {
    //   if (action) {
    //     alert("test")
    //   }
    // })
  }, [])

  useEffect(() => {
    assistantStateRef.current = {
      data: ScheduleStore.schedule
    }

    // assistantRef.current.on("data", ({ action }: any) => {
    //   if (action) {
    //     alert("test")
    //   }
    // })
  }, [])
  return (
    <div>
      <GroupField />
      {ScheduleStore.schedule.status ? <FullSchedule /> : ScheduleStore.schedule.group}
    </div>
  )
})

export default Schedule
