export const isClassPassed = (dateFinish: string) => {
  const date = new Date(dateFinish).getTime()
  console.log(date)
  const currentDate = new Date().getTime()
  console.log(currentDate)
  return currentDate > date
}
