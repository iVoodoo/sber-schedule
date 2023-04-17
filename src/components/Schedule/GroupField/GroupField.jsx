import { TextField } from "@sberdevices/plasma-ui"
import { Button, Row } from "@salutejs/plasma-ui"
import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import ScheduleStore from "@store/ScheduleStore"

const GroupField = observer(() => {
  const [groupNumber, setGroupNumber] = useState("")

  return (
    <div>
      <Row style={{ marginBottom: "1rem", justifyContent: "center" }}>
        <TextField
          size="m"
          placeholder="Номер группы"
          defaultValue="22"
          value={groupNumber}
          onChange={(e) => setGroupNumber(e.target.value)}
        />
      </Row>
      <Row style={{ marginBottom: "1rem", justifyContent: "center" }}>
        <Button
          text="Всё расписание"
          view="primary"
          size="s"
          onClick={() => ScheduleStore.getScheduleData(groupNumber)}
        />
      </Row>
      <Row style={{ marginBottom: "1rem", justifyContent: "center" }}>
        <Button
          text="Занятия на сегодня"
          view="primary"
          size="s"
          onClick={() => ScheduleStore.getScheduleToday(groupNumber)}
        />
      </Row>
    </div>
  )
})

export default GroupField
