import { Links } from '@data'
import {
  Badge,
  Button,
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
  isProjectActivity,
  time,
  period,
  isClassPassed
}) => {
  const onProjectActivityClick = () => {
    window.location.href = Links.ProjectActivityEMosPolytech
  }

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
          <Badge text={location} size='s' style={{ marginTop: '0.5em' }} view='secondary' />
          {!isProjectActivity && shortRooms.length !== 0 && (
            <Badge
              text={shortRooms?.join(',')}
              size='s'
              style={{ marginTop: '0.5em' }}
              view='secondary'
            />
          )}
          <TextBox>
            <CardParagraph1 mt='6x' lines={4}>
              {isProjectActivity ? 'Проектная деятельность' : subject}
            </CardParagraph1>
            <TextBoxSubTitle>{teacher}</TextBoxSubTitle>
          </TextBox>
        </CardContent>
        {isProjectActivity && (
          <Button
            onClick={onProjectActivityClick}
            text='Смотреть ПД'
            size='s'
            disabled={isClassPassed}
            view='primary'
          />
        )}
      </CardBody>
    </Card>
  )
}

export default SingleCard
