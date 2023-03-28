import axios from 'axios';
import { makeAutoObservable } from 'mobx';

class ScheduleStore {
  scheduleData = {};

  constructor() {
    makeAutoObservable(this);
  }

  schedule() {
    return this.scheduleData;
  }

  clearSchedule() {
    this.scheduleData = {};
  }

  async getScheduleData(groupNumber) {
    const response = await axios.get('/data/data.json');
    const preparedResponse = response.data.contents;
    const founded = preparedResponse[groupNumber];
    console.log('GET schedule for ', groupNumber);
    console.log('result', founded);
    if (founded.length !== 0) {
      this.scheduleData.push({
        data: founded.grid,
        group: founded.group.title
      });
    } else {
      this.scheduleData.push({
        data: 'Группа не найдена'
      });
    }
  }
}

export default new ScheduleStore();
