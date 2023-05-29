import React from "react"
import GroupField from "./GroupField/GroupField"
import ScheduleStore from "@store/ScheduleStore"
import { observer } from "mobx-react-lite"
import FullSchedule from "./FullSchedule/FullSchedule"

const Schedule: React.FC = observer(() => {
  return (
    <div>
      <GroupField />
      {ScheduleStore.schedule.status ? <FullSchedule /> : ScheduleStore.schedule.group}
    </div>
  )
})

export default Schedule
