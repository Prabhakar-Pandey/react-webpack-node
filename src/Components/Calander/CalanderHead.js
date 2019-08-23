import React from 'react';
import styles from './Calander.css';
import { CONSTANTS } from './Constant';

export default function CalanderHead(props) {
    return (
        <div className="calander-heading">
            <div>
                <div className="calander-button-tab">
                    Today
                        </div>
            </div>
            <div>
                <div className="calander-button-nav">

                    <span onClick={props.onPrevClick} className="prev">&#10094;</span>
                    <span onClick={props.onNextClick} className="next">&#10095;</span>
                </div>
            </div>
            <div>
                <div className="calander-heading-text">
                    {CONSTANTS.Month[props.currentMonth].shortName} {props.currentYear}
                </div>
            </div>
            <div className="btn-wrapper">
                <div className={props.slectedView=="DAY_VIEW"?"calander-button-tab active":"calander-button-tab"}>
                    Day
                        </div>
                <div className={props.slectedView=="WEEK_VIEW"?"calander-button-tab active":"calander-button-tab"}>
                    Week
                        </div>
                <div className={props.slectedView=="MONTH_VIEW"?"calander-button-tab active":"calander-button-tab"}>
                    Month
                        </div>
            </div>
        </div>
    )
}