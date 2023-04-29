import axios from "axios"
import { makeAutoObservable, runInAction } from "mobx"

class ScheduleStore {
  scheduleData = {
    data: "",
    group: "",
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
    this.scheduleData = { data: "", group: "", today: false, status: false }
  }

  getScheduleData = async (groupNumber: string) => {
    this.clearSchedule()
    const response = await axios.get("/data/data.json")
    const preparedResponse = response.data.contents
    const founded = preparedResponse[groupNumber]
    if (founded) {
      runInAction(() => {
        this.scheduleData = {
          data: JSON.stringify(founded.grid),
          group: founded.group.title,
          today: false,
          status: true
        }
      })
    } else {
      runInAction(() => {
        this.scheduleData = {
          data: "",
          group: "Либо введи номер группы, либо группа не найдена",
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
    const response = await axios.get("/data/data.json")
    const preparedResponse = response.data.contents
    const founded = preparedResponse[groupNumber]

    if (founded && today !== 0) {
      runInAction(() => {
        this.scheduleData = {
          data: JSON.stringify(founded.grid[today]),
          group: founded.group.title,
          today: true,
          status: true
        }
      })
    } else {
      runInAction(() => {
        this.scheduleData = {
          data: "",
          group: "Введи номер группы или отдыхай",
          today: true,
          status: false
        }
      })
    }
  }
}

export default new ScheduleStore()
