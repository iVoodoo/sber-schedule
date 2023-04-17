const getDayName = (dayId) => {
  let day = ""
  switch (Number(dayId)) {
    case 0:
      day = "Воскресенье"
      break
    case 1:
      day = "Понедельник"
      break
    case 2:
      day = "Вторник"
      break
    case 3:
      day = "Среда"
      break
    case 4:
      day = "Четверг"
      break
    case 5:
      day = "Пятница"
      break
    case 6:
      day = "Суббота"
      break
    default:
      break
  }
  return day
}

export default getDayName
