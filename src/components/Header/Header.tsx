// import { Header } from '@sberdevices/plasma-ui';
// import s from "./Header.module.css"
import { Link } from 'react-router-dom'

import logo from '@assets/logo.png'
import { Icon } from '@salutejs/plasma-icons'
import { Col, H1, Image, Row, TextBox } from '@salutejs/plasma-ui'

export const HeaderApp = () => {
  return (
    <header style={{ marginBottom: '1rem', justifyContent: 'center' }}>
      <Row style={{ marginBottom: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
        <Col size={2}>
          <Image src={logo} />
        </Col>
        <Col size={2}>
          <H1>Расписание занятий</H1>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem', justifyContent: 'space-around' }}>
        <Link to='/' style={{ textDecoration: 'none', textAlign: 'center' }}>
          <Icon icon='house' size='s' />
          <TextBox title='Расписание' />
        </Link>
        <Link to='/contacts' style={{ textDecoration: 'none', textAlign: 'center' }}>
          <Icon icon='info' size='s' />
          <TextBox title='Контакты' />
        </Link>
      </Row>
    </header>
  )
}
