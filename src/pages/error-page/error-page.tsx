import { headline2 } from '@salutejs/plasma-tokens'
import { Col, H2, Row } from '@salutejs/plasma-ui'

export const ErrorPage = () => {
  return (
    <Row>
      <Col size={4} offset={2}>
        <H2 style={headline2}>Что-то пошло не так</H2>
      </Col>
    </Row>
  )
}
