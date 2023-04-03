// import React from "react";
// import ReactDOM from "react-dom";
// import styled from "styled-components";
// import { DeviceThemeProvider } from '@sberdevices/plasma-ui';
// import { gradient } from '@sberdevices/plasma-tokens';
// import { darkSber } from '@sberdevices/plasma-tokens/themes';
// import { sberBox } from '@sberdevices/plasma-tokens/typo';

// import App from "./App";
// import "./style.css";

// const StyledPreview = styled.div`
//     ${darkSber[":root"]};
//     ${sberBox[":root"]};

//     height: 100%;
//     background-image: ${gradient};

//     padding: 1rem;

//     > div {
//         display: flex;
//         gap: 1rem;
//     }
// `

// ReactDOM.render(
//     <DeviceThemeProvider responsiveTypo>
//         <StyledPreview>
//             <App />
//         </StyledPreview>
//     </DeviceThemeProvider>,
//     document.getElementById("root")
// );

// // reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
