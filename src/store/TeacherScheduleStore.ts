import { makeAutoObservable, runInAction } from 'mobx'

import { gradient } from '@salutejs/plasma-tokens'
import { getTeacherSchedule } from '@utils/api'

class TeacherStore {
  teacherData = {
    data: '',
    teacher: '',
    status: false
  }

  constructor() {
    makeAutoObservable(this)
  }

  get teacherSchedule() {
    return this.teacherData
  }

  clearSchedule = () => {
    this.teacherData = { data: '', teacher: '', status: false }
  }

  getTeacherSchedule = async (teacherName: string) => {
    this.clearSchedule()
    const schedule = await getTeacherSchedule(teacherName).then((data) => {
      return data.data
    })

    runInAction(() => {
      this.teacherData = {
        data: schedule.contents.grid,
        teacher: schedule.teacher,
        status: schedule.find
      }
    })
  }
}

export default new TeacherStore()
