import axios from "axios"

const getSchedule = async (groupNumber: string) => {
  const response = await axios.get("/data/data.json")
  const preparedResponse = response.data.contents
  const founded = preparedResponse[groupNumber]
  console.log("GET schedule for ", groupNumber)
  console.log("result", founded)
  if (founded.length !== 0) {
    return {
      data: founded.grid,
      group: founded.group.title
    }
  } else {
    return { data: "Группа не найдена" }
  }
}

export default getSchedule
