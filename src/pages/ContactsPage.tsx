import { addressData } from "@data/addressData"
import { headline2 } from "@salutejs/plasma-tokens"
import {
  Card,
  CardBody,
  CardContent,
  Cell,
  Col,
  H2,
  Row,
  TextBox,
  TextBoxBigTitle,
  TextBoxSubTitle
} from "@salutejs/plasma-ui"

const ContactsPage = () => {
  return (
    <div>
      <Row>
        <Col size={4} offset={2}>
          <H2 style={headline2}>Контакты</H2>
        </Col>
      </Row>
      <Row>
        <Col size={4} offset={2}>
          <Cell
            style={{ marginBottom: "1rem" }}
            contentLeft={<TextBox title="тел.:" />}
            content={<TextBox title="+7(495)223-05-23" />}
          />
        </Col>
        <Col size={4} offset={2}>
          <Cell
            style={{ marginBottom: "1rem" }}
            contentLeft={<TextBox title="факс.:" />}
            content={<TextBox title="+7(499)785-62-24" />}
          />
        </Col>
        <Col size={4} offset={2}>
          <Cell
            style={{ marginBottom: "1rem" }}
            contentLeft={<TextBox title="e-mail:" />}
            content={<TextBox title="mospolytech@mospolytech.ru" />}
          />
        </Col>
      </Row>
      <Row>
        <Col size={4} offset={2} style={{ marginBottom: "1rem" }}>
          <H2 style={headline2}>Адреса</H2>
        </Col>
      </Row>
      <Row>
        {addressData.map((item) => {
          return (
            <Col size={4} offset={1} style={{ marginBottom: "1rem" }} key={item.address}>
              <Card>
                <CardBody>
                  <CardContent>
                    <TextBoxBigTitle>{item.location}</TextBoxBigTitle>
                    <TextBoxSubTitle>{item.address}</TextBoxSubTitle>
                  </CardContent>
                </CardBody>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default ContactsPage
