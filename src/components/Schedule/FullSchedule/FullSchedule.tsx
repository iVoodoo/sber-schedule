import ScheduleStore from "@store/ScheduleStore"
import { observer } from "mobx-react-lite"
import SingleCard from "./SingleCard"
import getTime from "@utils/getTime"
import getDayName from "@utils/getDayName"
import isStudyDay from "@utils/isStudyDay"
import { ObjectType } from "typescript"

const FullSchedule = observer(() => {
  let data = ""

  data = JSON.parse(ScheduleStore.schedule.data)
  console.log(data)

  return (
    <div>
      <h2>Расписание группы {ScheduleStore.schedule.group}</h2>
      <>
        {!ScheduleStore.schedule.today ? (
          <>
            {Object.keys(data).map((key: any, index) => {
              const day = data[key]
              const isStudy = isStudyDay(day)
              return (
                <div key={index}>
                  <h2>{getDayName(key)}</h2>

                  {isStudy !== 0 ? (
                    Object.keys(day).map((key: any, index) => {
                      const pairs = day[key]
                      const time = getTime(key)
                      console.log(pairs)
                      return (
                        <div key={index}>
                          {Object.values(pairs).length !== 0 &&
                            Object.values(pairs).map((value: any, index) => {
                              console.log(value)
                              return (
                                <SingleCard
                                  key={index}
                                  subject={value.sbj}
                                  teacher={value.teacher}
                                  location={value.location}
                                  time={time}
                                  period={value.dts}
                                />
                              )
                            })}
                        </div>
                      )
                    })
                  ) : (
                    <p>Занятий нет</p>
                  )}
                </div>
              )
            })}
          </>
        ) : (
          <>
            <h2>{getDayName(new Date().getDay())}</h2>
            {isStudyDay(data) ? (
              Object.keys(data).map((key: any, index) => {
                const pairs = data[key]
                const time = getTime(key)
                return (
                  <div key={index}>
                    {Object.values(pairs).map((value: any, index) => {
                      return (
                        <SingleCard
                          key={index}
                          subject={value.sbj}
                          teacher={value.teacher}
                          location={value.location}
                          time={time}
                          period={value.dts}
                        />
                      )
                    })}
                  </div>
                )
              })
            ) : (
              <p>Занятий нет</p>
            )}
          </>
        )}
      </>
    </div>
  )
})

export default FullSchedule
