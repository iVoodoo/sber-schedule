import { FieldContent, TextFieldInput } from '@sberdevices/plasma-core';
import { TextField } from '@sberdevices/plasma-ui';
import { Button, ActionButton, Row, Col } from '@salutejs/plasma-ui';
import React from 'react';
import s from './GroupField.module.css';


const  GroupField = () => {
    return (
        <div>
            <Row style={{marginBottom: '1rem', justifyContent:'center'}}>
                <TextField size="l" placeholder='Введите номер группы' defaultValue="201-361"/>
            </Row>
            <Row style={{ marginBottom: '1rem', justifyContent:'center'}}>
                <Button text="Показать расписание" view="primary" size="s"/>
            </Row> 
        </div>
    );
}

export default GroupField;