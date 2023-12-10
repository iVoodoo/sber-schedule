import { observer } from 'mobx-react-lite'

import { Col, Container, H1, H2, Row } from '@salutejs/plasma-ui'
import TeacherScheduleStore from '@store/TeacherScheduleStore'
import { getDayName, getTime, isClassPassed, isStudyDay } from '@utils/helpers'

import SingleCard from './single-card'

export const TeacherSchedule = observer(() => {
  let data = ''

  data = TeacherScheduleStore.teacherData.data
  console.log(data)

  return (
    <Container>
      <Row>
        <Col type='rel' size={12} sizeS={4}>
          <H1 mt={8}>{TeacherScheduleStore.teacherData.teacher} - расписание занятий</H1>
        </Col>
      </Row>
      {Object.keys(data).map((key: any, index) => {
        const day = data[key]
        const isStudy = isStudyDay(day)
        return (
          <Row key={index} style={{ marginTop: '1rem', justifyContent: 'center' }}>
            <Col type='rel' size={8} sizeS={4}>
              <H2 mb={8}>{getDayName(key)}</H2>

              {isStudy !== 0 ? (
                Object.keys(day).map((key: any, index) => {
                  const pairs = day[key]
                  const time = getTime(key)
                  console.log(pairs)
                  return (
                    <div key={index}>
                      {Object.values(pairs).length !== 0 &&
                        Object.values(pairs).map((value: any, index) => {
                          return (
                            <SingleCard
                              key={index}
                              subject={value.sbj}
                              teacher={value.group}
                              location={value.location}
                              shortRooms={value.shortRooms}
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
                <Row style={{ marginBottom: '1rem', justifyContent: 'center' }}>
                  <Col type='rel' size={6} sizeS={4}>
                    <p>Занятий нет</p>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        )
      })}
    </Container>
  )
})

export default TeacherSchedule
