import React from 'react';
// import getSchedule from '@utils/getSchedule';
import GroupField from './GroupField/GroupField';
// import ScheduleStore from '@store/ScheduleStore';
// import { observer } from 'mobx-react-lite';
// import { observer } from 'mobx-react-lite';
import MyComponent from './ScheduleCard/MyComponent';
import ScheduleStore from '@store/ScheduleStore';
import { observer } from 'mobx-react-lite';
// import { observable } from 'mobx';
// import ScheduleCard from './ScheduleCard/ScheduleCard';

const Schedule = observer(() => {
  const store = new ScheduleStore();
  // const onClick = (groupNumber) => {
  //   ScheduleStore.getScheduleData(groupNumber);
  // };

  // const { scheduleData } = ScheduleStore;
  // useEffect(() => {
  //   const data = ScheduleStore.schedule();
  // }, [GroupField]);
  return (
    <div>
      <GroupField store={store} />
      <MyComponent store={store} />
      {/* {ScheduleStore.schedule} */}
      {/* <div>{ScheduleStore.schedule.group}</div> */}
      {/* <ScheduleCard /> */}
    </div>
  );
});

export default Schedule;
