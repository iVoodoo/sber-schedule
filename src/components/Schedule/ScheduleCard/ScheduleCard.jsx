import { Row } from '@salutejs/plasma-ui';
import { Badge, Button, Card, CardBody, CardContent, CardMedia, CardParagraph1, TextBox, TextBoxBigTitle, TextBoxSubTitle, TextField } from '@sberdevices/plasma-ui';
import React from 'react';


const  ScheduleCard = () => {
    return (
        <div>
            <Row style={{ marginBottom: '1rem', justifyContent:'center'}}>
                <TextBox>
                    <TextBoxBigTitle>Понедельник</TextBoxBigTitle>
                </TextBox>
            </Row>
            <Row style={{justifyContent:'center'}}>
                <Card style={{width: "75vw", marginBottom: '1rem'}}>
                    <CardBody>
                        <CardContent>
                            <TextBox>
                                <Badge  style={{ marginRight: '1.25rem'}} text='9:00 - 10:30' size="l"/>
                                <Badge text='Зал №3' size="l" view='secondary'/>
                            </TextBox>
                            <TextBox>
                                <TextBoxBigTitle>Элективные дисциплины по физической культуре и спорту (Практика)</TextBoxBigTitle>
                                <TextBoxSubTitle>Миронова Ирина Геннадьевна</TextBoxSubTitle>
                            </TextBox>
                        </CardContent>
                    </CardBody>
                </Card>   
                <Card style={{width: "75vw", marginBottom: '1rem'}}>
                    <CardBody>
                        <CardContent>
                            <TextBox>
                                <Badge  style={{ marginRight: '1.25rem'}} text='9:00 - 10:30' size="l"/>
                                <Badge text='Зал №3' size="l" view='secondary'/>
                            </TextBox>
                            <TextBox>
                                <TextBoxBigTitle>Элективные дисциплины по физической культуре и спорту (Практика)</TextBoxBigTitle>
                                <TextBoxSubTitle>Миронова Ирина Геннадьевна</TextBoxSubTitle>
                            </TextBox>
                        </CardContent>
                    </CardBody>
                </Card>   
            </Row>
        </div>
    );
}

export default ScheduleCard;