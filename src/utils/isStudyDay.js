const isStudyDay = (day) => {
  return Object.values(day).reduce((totalCount, key) => totalCount + key.length, 0)
}

export default isStudyDay
