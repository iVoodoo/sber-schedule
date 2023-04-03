import axios from 'axios';
import { makeAutoObservable } from 'mobx';

class ScheduleStore {
  scheduleData = {
    data: '',
    group: '',
    status: false
  };

  constructor() {
    makeAutoObservable(this);
  }

  get schedule() {
    return this.scheduleData;
  }

  clearSchedule = () => {
    this.scheduleData = {};
  };

  getScheduleData = async (groupNumber) => {
    this.clearSchedule();
    const response = await axios.get('/data/data.json');
    const preparedResponse = response.data.contents;
    const founded = preparedResponse[groupNumber];
    // const grid = ;
    // console.log(founded.grid);
    // console.log('GET schedule for ', groupNumber);
    // console.log('result', founded.grid[5][3]['1'].sbj);
    // console.log('result', grid);

    if (founded) {
      console.log('here');

      this.scheduleData = {
        data: JSON.stringify(founded.grid),
        group: founded.group.title,
        status: true
      };
    } else {
      console.log('bad');
      this.scheduleData = { data: null, group: 'Группа не найдена', status: false };
    }

    // console.log(this.schedule.group);
  };
}

export default ScheduleStore;
