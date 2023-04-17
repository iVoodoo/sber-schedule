// import { Row } from "@salutejs/plasma-ui"
import {
  Badge,
  // Button,
  Card,
  CardBody,
  CardContent,
  // CardMedia,
  // CardParagraph1,
  TextBox,
  TextBoxBigTitle,
  TextBoxSubTitle
  // TextField
} from "@sberdevices/plasma-ui"
// import React from "react"
// import * as ReactDOM from "react-dom"
// import { createRoot } from "react-dom"
// //import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
// import { FieldContent, TextFieldInput } from "@sberdevices/plasma-core"

const SingleCard = ({ subject, teacher, location, time, period }) => {
  return (
    <Card style={{ width: "75vw", marginBottom: "1rem" }}>
      <CardBody>
        <CardContent>
          <TextBox>
            <Badge style={{ marginRight: "1rem", padding: "0.6rem" }} text={time} size="s" />
            <Badge
              text={location}
              size="s"
              style={{ marginRight: "1rem", padding: "0.6rem" }}
              view="secondary"
            />
            <Badge text={period} size="s" style={{ padding: "0.6rem" }} view="secondary" />
          </TextBox>
          <TextBox>
            <TextBoxBigTitle>{subject}</TextBoxBigTitle>
            <TextBoxSubTitle>{teacher}</TextBoxSubTitle>
          </TextBox>
        </CardContent>
      </CardBody>
    </Card>
  )
}

export default SingleCard
