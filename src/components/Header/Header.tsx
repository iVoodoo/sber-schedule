// import { Header } from '@sberdevices/plasma-ui';
import React from "react"
// import s from "./Header.module.css"
import { H1, Row, TextBox } from "@salutejs/plasma-ui"
import { headline1 } from "@salutejs/plasma-tokens"
import { Link } from "react-router-dom"
import { Icon } from "@salutejs/plasma-icons"

const HeaderApp = () => {
  return (
    <header style={{ textAlign: "center" }}>
      <H1 style={headline1}>Расписание Московского политеха</H1>
      <Row style={{ marginBottom: "1rem", justifyContent: "space-around" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Icon icon="house" size="s" />
          <TextBox title="Расписание" />
        </Link>
        <Link to="/contacts" style={{ textDecoration: "none" }}>
          <Icon icon="info" size="s" />
          <TextBox title="Контакты" />
        </Link>
      </Row>
    </header>
  )
}

export default HeaderApp
