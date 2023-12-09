import { observer } from 'mobx-react-lite'
import React from 'react'

import ScheduleStore from '@store/ScheduleStore'

import FullSchedule from './full-schedule/full-schedule'
import GroupField from './group-field/group-field'

export const Schedule: React.FC = observer(() => {
  return (
    <div>
      <GroupField />
      {ScheduleStore.schedule.status ? <FullSchedule /> : ScheduleStore.schedule.group}
    </div>
  )
})
