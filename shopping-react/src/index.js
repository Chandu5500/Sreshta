import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import {LoginComponent} from './components/login/login'
import { DataBinding } from './components/dataBinding/dataBinding';
import { DataBindingArray } from './components/dataBindingArray/dataBindingArray';
import { ArrayObjectTable } from './components/arrayObjectTable/arrayObjectTable';
import { NestedArray } from './components/nestedArray/nestedArray';
import { Cards } from './components/cards/cards';
import { OnewayBinding } from './components/onewayBinding/onewayBinding';
import { Usestate } from './components/usestate/usestate';
import { Usestate1 } from './components/usestate1/usestate1';
import { TwowayBinding } from './components/twowayBinding/twowayBinding';
import { TwowayBinding1 } from './components/twowayBinding1/twowayBinding1';
import { FetchAPI } from './components/fetchAPI/fetchAPI';
import { NasaAPICardStyle } from './components/nasaAPI/nasaAPICardStyle';
import { NasaAPICardStyleJquery } from './components/jquery/jquery';
import { NasaAPICardStyleAxios } from './components/axios/axios';
import { Shopping } from './components/shopping/shopping';
import { StyleDemo } from './components/styleDemo/styleDemo';
import { ChooseStyle } from './components/chooseStyle/chooseStyle';
import { LoginForm } from './components/loginForm/loginForm';
import { EventDemo } from './components/eventDemo/eventDemo';
import { EventDemo1 } from './components/eventDemo1/eventDemo1';
import { EventDemoTable } from './components/eventDemoTable/eventDemoTable';
import { MouseEvents } from './components/mouseEvents/mouseEvents';
import { MouseEvents1 } from './components/mouseEvents/mouseEvents1';
import { MouseEvents2 } from './components/mouseEvents/mouseEvents2';
import { MouseEvents3 } from './components/mouseEvents/mouseEvents3';
import { MouseEvents4 } from './components/mouseEvents/mouseEvents4';
import { KeyboardEvents } from './components/keyboardEvents/keyboardEvents';
import { StateEvents } from './components/stateEvents/stateEvents';
import { ClipboardEvents } from './components/clipboardEvents/clipboardEvents';
import { TouchEvents } from './components/touchEvents/touchEvents';
import { TouchEvents1 } from './components/touchEvents/touchEvents1';
import { TouchEvents2 } from './components/touchEvents/touchEvents2';
import { FormEvents } from './components/formEvents/formEvents';
import { TimerEvents } from './components/timerEvents/timerEvents';
import { TimerEvents1 } from './components/timerEvents/timerEvents1';
import { EmiCalculator } from './components/emiCalculator/emiCalculator';
import { Sample } from './components/sample/sample';
import { Slider } from './components/sample/slider';
import { Properties } from './components/properties/properties';
import { Properties1 } from './components/properties/properties1';
import { Properties2 } from './components/properties/properties2';
import { Register } from './components/register/register';
import { Register1 } from './components/register/register1';
import { Register2 } from './components/register/register2';
import { Register3 } from './components/register/register3';
import { LifeCycle } from './components/lifeCycle/lifeCycle';
import { FormValidation } from './components/formValidation/formValidation';
import { Formik1 } from './components/formik/formik1';
import { Formik2 } from './components/formik/formik2'
import { Yup } from './components/yup/yup';
import { FormikValidation } from './components/formikValidation/formikValidation';
import { FormikComponents } from './components/formikComponents/formikComponents';
import { FormikComponents1 } from './components/formikComponents/formikComponents1';
import { Tutorial } from './components/tutorial/tutorial';
import { Tutorial1 } from './components/tutorial/tutorial1';
import { Tutorial2 } from './components/tutorial/tutorial2';
import { Tutorial3 } from './components/tutorial/tutorial3';
import { Grid } from './components/grid/grid';

import { Header } from './components/header/header';
import { Header1 } from './components/header1/header1';
import Car from './components/carousel/carousel';


import reportWebVitals from './reportWebVitals';
import { LikesCounter } from './components/likes-counter/likes-counter.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LikesCounter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
