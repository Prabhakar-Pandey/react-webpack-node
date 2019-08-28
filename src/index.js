import React from 'react';
import {render} from 'react-dom';
import { Provider } from "react-redux";
import Dashbord from './Dashbord/dashbordMaterial';
import store from './Store';
render(
    <Provider store={store}>
        <Dashbord />
    </Provider>
    , document.getElementById('app'));