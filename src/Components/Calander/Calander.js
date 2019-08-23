import React from 'react';
import { CONSTANTS } from './Constant';
import CalanderHead from './CalanderHead';
import CalendarBody from './CalendarBody';
import styles from './Calander.css';

class Calander extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slectedView: "MONTH_VIEW",
            startDate: null,
            endDate: null,
            startTime: 10,
            endTime: 18,
            rangeInMin: 30,
            currentYear: null,
            currentDate: null,
            currentMonth: null
        }

        this.onNextClick = this.onNextClick.bind(this);
        this.onPrevClick = this.onPrevClick.bind(this);
        this.calculateDate = this.calculateDate.bind(this);
    }
    componentWillMount() {
        this.calculateDate(this.props)
    }
    componentWillReceiveProps(nextProps) {
        this.calculateDate(nextProps)
    }
    calculateDate(props) {
        let selectedDate = new Date(props.today);
        if (this.state.slectedView == "MONTH_VIEW") {
            let currentDate = selectedDate.getDate()//22
            let currentDay = selectedDate.getDay()//4
            let currentMonth = selectedDate.getMonth() + 1;
            let startDate = currentDate - currentDay;
            let endDate = startDate + CONSTANTS.DaysInWeek;
            let currentYear = selectedDate.getFullYear()

            this.setState({
                startDate,
                endDate,
                currentYear,
                currentDate,
                currentMonth
            })
        }
    }

    timeBlock(dsplay) {
        let eachTimeBlock = [];
        for (var i = this.state.startTime; i <= this.state.endTime; i++) {
            eachTimeBlock.push(

                <div className="date-row-wise">
                    {dsplay ? <div className="content-center">{i}</div> : <div><div className="empty-content"></div><div className="empty-content"></div></div>}
                </div>

            )
        }
        return eachTimeBlock;
    }
    dateBlock() {
        let eachDate = [];
        eachDate.push(
            <li className="date-row-wise-li">
                <div>
                    <div className="calander-day"></div>
                    <div className="calander-date"></div>
                    {this.timeBlock(true)}
                </div>
            </li>)
        for (var i = this.state.startDate, j = 1; i <= this.state.endDate; i++ , j++) {
            eachDate.push(
                <li className="date-row-wise-li">
                    <div>
                        <div className="calander-day">{CONSTANTS.DaysMapShort[j]}</div>
                        <div className="calander-date">{i}</div>
                        {this.timeBlock()}
                    </div>
                </li>
            )
        }
        return eachDate;
    }
    onNextClick() {
        this.props.onNextClick(this.props.today)
    }
    onPrevClick() {
        this.props.onPrevClick(this.props.today)
    }
    render() {

        return (
            <div className="calander-wrapper">
                <b>calander {this.props.today}</b>
                <CalanderHead
                    onNextClick={this.onNextClick}
                    onPrevClick={this.onPrevClick}
                    currentYear={this.state.currentYear}
                    currentDate={this.state.currentDate}
                    currentMonth={this.state.currentMonth}
                />

                <CalendarBody
                    startDate={this.state.startDate}
                    startTime={this.state.startTime}
                    endDate={this.state.endDate}
                    endTime={this.state.endTime}
                    year={this.state.currentYear}
                    currentDate={this.state.currentDate}
                    currentMonth={this.state.currentMonth}

                />



                <ul className="days">

                </ul>
            </div>
        );
    }
}

export default Calander