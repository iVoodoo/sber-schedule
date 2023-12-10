import {
  Badge,
  Card,
  CardBody,
  CardContent,
  CardParagraph1,
  Col,
  Row,
  TextBox,
  TextBoxSubTitle
} from '@salutejs/plasma-ui'
import { SingleCardProps } from '@types'

const SingleCard: React.FC<SingleCardProps> = ({
  subject,
  teacher,
  location,
  shortRooms,
  time,
  period,
  isClassPassed
}) => {
  return (
    <Card style={{ marginBottom: '1rem' }} disabled={isClassPassed}>
      <CardBody>
        <CardContent>
          <Row>
            <Col>
              <Badge text={time} size='s' view='primary' />
            </Col>
            <Col>
              <Badge text={period} size='s' style={{}} view='secondary' />
            </Col>
          </Row>
          <Row>
            <Col>
              <Badge text={location} size='s' style={{ marginTop: '0.5em' }} view='secondary' />
            </Col>
          </Row>
          {shortRooms.length !== 0 && (
            <Row>
              <Col>
                <Badge
                  text={shortRooms?.join(',')}
                  size='s'
                  style={{ marginTop: '0.5em' }}
                  view='secondary'
                />
              </Col>
            </Row>
          )}
          <TextBox>
            <CardParagraph1 mt='6x' lines={4}>
              {subject}
            </CardParagraph1>
            <TextBoxSubTitle>{teacher}</TextBoxSubTitle>
          </TextBox>
        </CardContent>
      </CardBody>
    </Card>
  )
}

export default SingleCard
