import { Links } from '@data'

export const isProjectActivity = (className: string) => {
  if (className === '__ПД__') {
    return Links.ProjectActivityEMosPolytech
  }
}
