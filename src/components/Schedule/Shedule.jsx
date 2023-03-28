import React from 'react';
import getSchedule from '@utils/getSchedule';
import GroupField from './GroupField/GroupField';
// import ScheduleCard from './ScheduleCard/ScheduleCard';

const Schedule = () => {
  return (
    <div>
      <GroupField onClick={getSchedule} />
      {/* <ScheduleCard /> */}
    </div>
  );
};

export default Schedule;
