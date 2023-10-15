import axios, { AxiosRequestConfig } from 'axios'

const apiGroups = axios.create({
  baseURL: '/api/'
})
export const getGroupSchedule = async (groupNumber: string) => {
  const config: AxiosRequestConfig = {
    url: 'group',
    method: 'GET',
    params: {
      group: groupNumber
    }
  }

  const request = await apiGroups(config)
  return request
}
