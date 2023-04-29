// import { Header } from '@sberdevices/plasma-ui';
import React from "react"
// import s from "./Header.module.css"
import { H1 } from "@salutejs/plasma-ui"
import { headline1 } from "@salutejs/plasma-tokens"

const HeaderApp = () => {
  return (
    <header style={{ textAlign: "center" }}>
      <H1 style={headline1}>Расписание Московского политеха</H1>
    </header>
  )
}

export default HeaderApp
