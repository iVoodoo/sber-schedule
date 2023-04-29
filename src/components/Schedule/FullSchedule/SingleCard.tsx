// import { Row } from "@salutejs/plasma-ui"
import {
  Badge,
  // Button,
  Card,
  CardBody,
  CardContent,
  // CardMedia,
  // CardParagraph1,
  // TextBox,
  TextBoxBigTitle,
  TextBoxSubTitle
  // TextField
} from "@salutejs/plasma-ui"
import { SingleCardProps } from "@AppTypes/SingleCardProps"
// import React from "react"
// import * as ReactDOM from "react-dom"
// import { createRoot } from "react-dom"
// //import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
// import { FieldContent, TextFieldInput } from "@sberdevices/plasma-core"

const SingleCard: React.FC<SingleCardProps> = ({ subject, teacher, location, time, period }) => {
  return (
    <Card style={{ width: "75vw", marginBottom: "1rem" }}>
      <CardBody>
        <CardContent>
          <div>
            <Badge style={{ marginRight: "1rem", padding: "0.6rem" }} text={time} size="s" />
            <Badge
              text={location}
              size="s"
              style={{ marginRight: "1rem", padding: "0.6rem" }}
              view="secondary"
            />
            <Badge text={period} size="s" style={{ padding: "0.6rem" }} view="secondary" />
          </div>
          <div>
            <TextBoxBigTitle>{subject}</TextBoxBigTitle>
            <TextBoxSubTitle>{teacher}</TextBoxSubTitle>
          </div>
        </CardContent>
      </CardBody>
    </Card>
  )
}

export default SingleCard
