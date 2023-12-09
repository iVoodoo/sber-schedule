import { addressData } from '@data'
import { headline2 } from '@salutejs/plasma-tokens'
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
} from '@salutejs/plasma-ui'

export const ContactsPage = () => {
  return (
    <>
      <Row>
        <Col sizeS={4}>
          <H2 style={headline2}>Контакты</H2>
        </Col>
      </Row>
      <Row>
        <Col sizeS={4}>
          <Cell
            style={{ marginBottom: '1rem' }}
            content={<TextBox title='телефон:' subTitle='+7(495)223-05-23' />}
          />
        </Col>
      </Row>
      <Row>
        <Col sizeS={4}>
          <Cell
            style={{ marginBottom: '1rem' }}
            content={<TextBox title='факс:' subTitle='+7(499)785-62-24' />}
          />
        </Col>
      </Row>
      <Row>
        <Col sizeS={4}>
          <Cell
            style={{ marginBottom: '1rem' }}
            content={<TextBox title='e-mail:' subTitle='mospolytech@mospolytech.ru' />}
          />
        </Col>
      </Row>
      <Row>
        <Col sizeS={4} style={{ marginBottom: '1rem' }}>
          <H2 style={headline2}>Адреса</H2>
        </Col>
      </Row>
      <Row>
        {addressData.map((item) => {
          return (
            <Col sizeS={4} style={{ marginBottom: '1rem' }} key={item.address}>
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
    </>
  )
}
