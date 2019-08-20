import React from 'react';
import {render} from 'react-dom';
import { Provider } from "react-redux";
import MeetingDetails from './MeetingDetails';
import store from './Store';
render(
    <Provider store={store}>
        <MeetingDetails />
    </Provider>
    , document.getElementById('app'));