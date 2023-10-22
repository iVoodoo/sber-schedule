import axios from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'

import { gradient } from '@salutejs/plasma-tokens'
import { getGroupSchedule } from '@utils/api'

class ScheduleStore {
  scheduleData = {
    data: '',
    group: '',
    today: false,
    status: false
  }

  constructor() {
    makeAutoObservable(this)
  }

  get schedule() {
    return this.scheduleData
  }

  clearSchedule = () => {
    this.scheduleData = { data: '', group: '', today: false, status: false }
  }

  getScheduleData = async (groupNumber: string) => {
    this.clearSchedule()
    const schedule = await getGroupSchedule(groupNumber).then((data) => {
      return data
    })

    console.log(schedule)

    if (schedule.data?.status === 'ok') {
      console.log('HEREs')

      runInAction(() => {
        this.scheduleData = {
          data: schedule.data.grid,
          group: schedule.data.group.title,
          today: false,
          status: true
        }
      })
    } else {
      runInAction(() => {
        this.scheduleData = {
          data: schedule.data.data,
          group: schedule.data,
          today: false,
          status: false
        }
      })
    }
  }

  getScheduleToday = async (groupNumber: string) => {
    this.clearSchedule()
    const today = new Date().getDay()
    // console.log(today)
    // const response = await axios.get('/data/data.json')
    // const preparedResponse = response.data.contents
    // const founded = preparedResponse[groupNumber]
    const schedule = await getGroupSchedule(groupNumber).then((data) => {
      return data
    })

    console.log(schedule)

    if (schedule.data?.status === 'ok' && today !== 0) {
      runInAction(() => {
        this.scheduleData = {
          data: schedule.data.grid[today],
          group: schedule.data.group.title,
          today: true,
          status: true
        }
      })
    } else {
      runInAction(() => {
        this.scheduleData = {
          data: schedule.data.data,
          group: 'Введи номер группы или отдыхай',
          today: true,
          status: false
        }
      })
    }
  }
}

export default new ScheduleStore()
