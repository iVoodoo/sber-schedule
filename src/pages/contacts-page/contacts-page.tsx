import { addressData } from '@data'
import { headline2 } from '@salutejs/plasma-tokens'
import {
  Card,
  CardBody,
  CardContent,
  CardParagraph1,
  CarouselCol,
  CarouselGridWrapper,
  CarouselLite,
  Col,
  H2,
  Row,
  TextBox,
  TextBoxSubTitle,
  useRemoteHandlers
} from '@salutejs/plasma-ui'

export const ContactsPage = () => {
  const axis = 'x'

  const [index] = useRemoteHandlers({
    initialIndex: 1,
    axis,
    delay: 30,
    longDelay: 150,
    min: 0,
    max: addressData.length - 1
  })

  return (
    <>
      <Row style={{ marginBottom: '1rem' }}>
        <Col sizeS={4}>
          <H2 style={headline2}>Контакты</H2>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col sizeS={4}>
          <TextBox>
            <TextBoxSubTitle>телефон:</TextBoxSubTitle>
            <CardParagraph1 mt='6x' lines={2}>
              +7(495)223-05-23
            </CardParagraph1>
          </TextBox>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col sizeS={4}>
          <TextBox>
            <TextBoxSubTitle>факс:</TextBoxSubTitle>
            <CardParagraph1 mt='6x' lines={2}>
              +7(499)785-62-24
            </CardParagraph1>
          </TextBox>
        </Col>
      </Row>
      <Row style={{ marginBottom: '1rem' }}>
        <Col sizeS={4}>
          <TextBox>
            <TextBoxSubTitle>e-mail:</TextBoxSubTitle>
            <CardParagraph1 mt='6x' lines={2}>
              mospolytech@mospolytech.ru
            </CardParagraph1>
          </TextBox>
        </Col>
      </Row>
      <Row>
        <Col sizeS={4} style={{ marginBottom: '1rem' }}>
          <H2 style={headline2}>Адреса</H2>
        </Col>
      </Row>
      {/* <Row style={{ justifyContent: 'center' }}>
        {addressData.map((item) => {
          return (
            <Col type='rel' size={6} sizeS={6} style={{ marginBottom: '1rem' }} key={item.address}>
              <Card>
                <CardBody>
                  <CardContent>
                    <TextBox>
                      <CardParagraph1>{item.location}</CardParagraph1>
                      <TextBoxSubTitle>{item.address}</TextBoxSubTitle>
                    </TextBox>
                  </CardContent>
                </CardBody>
              </Card>
            </Col>
          )
        })}
      </Row> */}
      <CarouselGridWrapper>
        <CarouselLite
          axis={axis}
          index={index}
          scrollSnapType='mandatory'
          style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}
        >
          {addressData.map(({ location, address }, i) => (
            <CarouselCol key={`item:${i}`} size={4} sizeXL={4} scrollSnapAlign='start'>
              <Card style={{ maxHeight: '450px', maxWidth: '500px' }} focused={i === index}>
                <CardBody>
                  <CardContent>
                    <TextBox>
                      <CardParagraph1 lines={5}>{location}</CardParagraph1>
                      <TextBoxSubTitle>{address}</TextBoxSubTitle>
                    </TextBox>
                  </CardContent>
                </CardBody>
              </Card>
            </CarouselCol>
          ))}
        </CarouselLite>
      </CarouselGridWrapper>
    </>
  )
}
