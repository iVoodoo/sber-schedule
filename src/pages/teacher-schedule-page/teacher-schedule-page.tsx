import { observer } from 'mobx-react-lite'
import Papa from 'papaparse'
import { useEffect, useState } from 'react'

import { TeacherSchedule } from '@components'
import { Button, Col, Container, H2, Row, Spinner, TextField } from '@salutejs/plasma-ui'
import TeacherScheduleStore from '@store/TeacherScheduleStore'

// import teachersData from '../../data/teachers.csv'

export const TeacherSchedulePage = observer(() => {
  const [teachersList, setTeachersList] = useState([])
  const [teachersFilteredList, setTeachersFilteredList] = useState([])
  const [teacher, setTeacher] = useState(String)
  const [dropdownEnable, setDropdownEnable] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getCSV = () => {
    Papa.parse('/data/teachers.csv', {
      download: true,
      skipEmptyLines: true,
      delimiter: ';',
      complete: (results: any) => {
        setTeachersList(results.data)
      }
    })
  }
  useEffect(() => {
    getCSV()
  }, [])

  useEffect(() => {
    if (TeacherScheduleStore.teacherData.status) {
      setIsLoading(false)
    }
  }, [TeacherScheduleStore.teacherData.status])

  const searching = (word: string) => {
    const filtered = teachersList.filter((teacher: [string, string]) => {
      return teacher[1]!.indexOf(word) !== -1
    })
    setTeachersFilteredList(filtered)
  }

  const onSelectTeacher = (teacher: string) => {
    setTeacher(teacher)
    setDropdownEnable(false)
    setIsLoading(true)
    TeacherScheduleStore.getTeacherSchedule(teacher)
  }
  return (
    <>
      <Row>
        <Col size={6} sizeM={4} type='calc'>
          <H2>Расписание преподавателей</H2>
        </Col>
      </Row>
      <Row style={{ marginTop: '1rem', justifyContent: 'center' }}>
        <Col size={6} sizeS={4} type='calc'>
          <TextField
            placeholder='Иванов Иван Иванович'
            size='m'
            helperText='Введи ФИО преподавателя'
            defaultValue=''
            value={teacher}
            onChange={(e) => {
              setDropdownEnable(true)
              setTeacher(e.target.value)
              searching(e.target.value)
            }}
          />
        </Col>
      </Row>
      {dropdownEnable && (
        <Row
          style={{
            marginTop: '1rem',
            marginBottom: '2rem',
            justifyContent: 'center',
            gap: '1rem'
          }}
        >
          <Col type='calc' size={6} sizeS={4}>
            {teachersFilteredList.map(
              (teacher, index) =>
                index < 3 && (
                  <Button
                    style={{ marginBottom: '1rem', fontSize: '16px' }}
                    view='secondary'
                    text={teacher[1]}
                    key={teacher[0]}
                    stretch
                    size='s'
                    onClick={() => onSelectTeacher(teacher[1])}
                  />
                )
            )}
          </Col>
        </Row>
      )}
      <Row style={{ justifyContent: 'center' }}>
        {isLoading && (
          <Col size={6} style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <Spinner size={32} deviceScale={2} />
          </Col>
        )}
      </Row>
      {TeacherScheduleStore.teacherData.status && <TeacherSchedule />}
    </>
  )
})
