import { observer } from 'mobx-react-lite'

import { Col, H1, H2, Row } from '@salutejs/plasma-ui'
import ScheduleStore from '@store/ScheduleStore'
import { getDayName, getTime, isClassPassed, isStudyDay } from '@utils/helpers'

import SingleCard from './single-card'

const FullSchedule = observer(() => {
  let data = ''

  data = ScheduleStore.schedule.data

  return (
    <>
      <Row>
        <Col type='rel' size={12} sizeS={4}>
          <H1>Расписание группы {ScheduleStore.schedule.group}</H1>
        </Col>
      </Row>

      {!ScheduleStore.schedule.today ? (
        <>
          {Object.keys(data).map((key: any, index) => {
            const day = data[key]
            const isStudy = isStudyDay(day)
            return (
              <Row key={index} style={{ marginTop: '1rem', justifyContent: 'center' }}>
                {' '}
                <Col type='rel' size={8} sizeS={4}>
                  <H2>{getDayName(key)}</H2>

                  {isStudy !== 0 ? (
                    Object.keys(day).map((key: any, index) => {
                      const pairs = day[key]
                      const time = getTime(key)
                      // console.log(pairs)
                      return (
                        <div key={index}>
                          {Object.values(pairs).length !== 0 &&
                            Object.values(pairs).map((value: any, index) => {
                              return (
                                <SingleCard
                                  key={index}
                                  subject={value.sbj}
                                  teacher={value.teacher}
                                  location={value.location}
                                  shortRooms={value.shortRooms}
                                  isProjectActivity={
                                    value.auditories[0].title.replaceAll('_', '') === 'ПД'
                                  }
                                  time={time}
                                  period={value.dts}
                                  isClassPassed={isClassPassed(value.dt)}
                                />
                              )
                            })}
                        </div>
                      )
                    })
                  ) : (
                    <p>Занятий нет</p>
                  )}
                </Col>
              </Row>
            )
          })}
        </>
      ) : (
        <Row style={{ marginTop: '1rem', justifyContent: 'center' }}>
          <Col type='rel' size={8} sizeS={4}>
            <H2>{getDayName(new Date().getDay())}</H2>
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
                          shortRooms={value.shortRooms}
                          isProjectActivity={value.sbj.includes('Проектная деятельность')}
                          time={time}
                          period={value.dts}
                          isClassPassed={isClassPassed(value.dt)}
                        />
                      )
                    })}
                  </div>
                )
              })
            ) : (
              <p>Занятий нет</p>
            )}
          </Col>
        </Row>
      )}
    </>
  )
})

export default FullSchedule
