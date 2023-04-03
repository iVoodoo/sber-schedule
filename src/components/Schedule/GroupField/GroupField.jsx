import { TextField } from '@sberdevices/plasma-ui';
import { Button, Row } from '@salutejs/plasma-ui';
import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
// import { observer } from 'mobx-react-lite';
// import ScheduleStore from '@store/ScheduleStore';
// import { observer } from 'mobx-react-lite';
// import axios from 'axios';

const GroupField = observer(({ store }) => {
  const [groupNumber, setGroupNumber] = useState('');

  // const [schedule, setSchedule] = useState('');

  // const getSchedule = async (groupNumber) => {
  //   try {
  //     const response = await axios.get('/data/data.json');
  //     const preparedResponse = response.data.contents;
  //     const founded = preparedResponse[groupNumber];
  //     setSchedule(founded);
  //     console.log(founded);
  //   } catch (error) {
  //     console.error(error);
  //   }

  //   console.log('GET schedule for ', groupNumber);
  //   console.log('result', schedule);
  // };

  return (
    <div>
      <Row style={{ marginBottom: '1rem', justifyContent: 'center' }}>
        <TextField
          size="m"
          placeholder="Номер группы"
          defaultValue="22"
          value={groupNumber}
          onChange={(e) => setGroupNumber(e.target.value)}
        />
      </Row>
      <Row style={{ marginBottom: '1rem', justifyContent: 'center' }}>
        <Button
          text="Показать расписание"
          view="primary"
          size="s"
          onClick={() => store.getScheduleData(groupNumber)}
        />
      </Row>
    </div>
  );
});

export default GroupField;
