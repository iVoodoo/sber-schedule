import axios, { AxiosRequestConfig } from 'axios'

const apiTeachers = axios.create({
  baseURL: 'http://localhost:228'
})
export const getTeacherSchedule = async (teacherName: string) => {
  const config: AxiosRequestConfig = {
    headers: { 'Access-Control-Allow-Origin': '*' },
    url: '/teachers',
    method: 'GET',
    params: {
      name: teacherName
    }
  }

  const request = await apiTeachers(config)
  return request
}
