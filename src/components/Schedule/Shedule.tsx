import React from 'react'
import GroupField from './GroupField/GroupField'
import { observer } from 'mobx-react-lite'
import FullSchedule from './FullSchedule/FullSchedule'
import ScheduleStore from '@store/ScheduleStore'

export const Schedule: React.FC = observer(() => {
  return (
    <div>
      <GroupField />
      {ScheduleStore.schedule.status ? <FullSchedule /> : ScheduleStore.schedule.group}
    </div>
  )
})
