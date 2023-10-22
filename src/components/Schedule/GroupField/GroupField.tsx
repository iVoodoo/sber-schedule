import { observer } from 'mobx-react-lite'
import { useState } from 'react'

import { Button, Row, TextField } from '@salutejs/plasma-ui'
import ScheduleStore from '@store/ScheduleStore'

const GroupField = observer(() => {
  const [groupNumber, setGroupNumber] = useState('')

  return (
    <div>
      <Row style={{ marginBottom: '1rem', justifyContent: 'center' }}>
        <TextField
          placeholder='201-361'
          size='l'
          helperText='Введи номер группы'
          defaultValue='22'
          value={groupNumber}
          onChange={(e) => setGroupNumber(e.target.value)}
        />
      </Row>
      <Row style={{ marginBottom: '1rem', justifyContent: 'center' }}>
        <Button
          text='Всё расписание'
          view='primary'
          size='s'
          onClick={() => ScheduleStore.getScheduleData(groupNumber)}
        />
      </Row>
      <Row style={{ marginBottom: '1rem', justifyContent: 'center' }}>
        <Button
          text='Занятия на сегодня'
          view='primary'
          size='s'
          onClick={() => ScheduleStore.getScheduleToday(groupNumber)}
        />
      </Row>
    </div>
  )
})

export default GroupField
