const getTime = (dayId) => {
  let time = ""
  switch (Number(dayId)) {
    case 1:
      time = "9:00 - 10:30"
      break
    case 2:
      time = "10:40 - 12:10"
      break
    case 3:
      time = "12:20 - 13:50"
      break
    case 4:
      time = "14:30 - 16:00"
      break
    case 5:
      time = "16:10 - 17:40"
      break
    case 6:
      time = "17:50 - 19:20"
      break
    case 7:
      time = "19:30 - 21:00"
      break
    default:
      break
  }
  return time
}

export default getTime
