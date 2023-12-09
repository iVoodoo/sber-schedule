import { Schedule } from '@components'
import axios, { AxiosRequestConfig } from 'axios'

export const SchedulePage = () => {
  // const apiGroups = axios.create({
  //   baseURL: '/api/'
  // })
  // const getGroupSchedule = async () => {
  //   const config: AxiosRequestConfig = {
  //     url: 'group',
  //     method: 'GET',
  //     params: {
  //       group: '201-361'
  //     }
  //   }

  //   const request = await apiGroups(config)
  //   return request
  // }
  // getGroupSchedule().then((data) => {
  //   console.log(data)
  // })
  return <Schedule />
}
