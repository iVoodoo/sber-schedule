// import { Header } from '@sberdevices/plasma-ui';
import React from 'react';
import s from './Header.module.css';
import { H1, H2, H3, H4, H5 } from '@sberdevices/plasma-ui';
import { headline1} from '@salutejs/plasma-tokens';

const  HeaderApp = () => {
    return (
        // <Header
        // logo="./images/logo.png"
        // subtitle="Subtitle text"
        // logoAlt="Logo"
        // onBackClick={() => console.log('Back click!')}
        // title="Header title text"
    // >
/* <div>Header content</div> */
        // </Header>
        <header  className={s.header}>
        <h1 style={headline1}>Расписание Московского политеха</h1>
        </header>
    );
}

export default HeaderApp;