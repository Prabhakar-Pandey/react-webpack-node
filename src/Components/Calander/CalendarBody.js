import React from 'react';
import { CONSTANTS } from './Constant';
import styles from './Calander.css';

class CalanderBody extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            meetings:[{
                date:"23/08/2019",
                startTime:"10AM",
                endTime:"10:30AM",
                subject:"interview with prabhakar"
            },{
                date:"23/08/2019",
                startTime:"10:30AM",
                endTime:"11AM",
                subject:"interview with prabhakar"
            },{
                date:"23/08/2019",
                startTime:"10AM",
                endTime:"10:30AM",
                subject:"interview with prabhakar"
            }]
        }
    }
    checkMeetings(time, month, timeFlag){
        
        let meetings = [];
        let meetingFlag = false;
        time = time.toString().split(":")[0];
        this.state.meetings.map(meeting=>{
            if(month == meeting.date.split('/')[0]){
                
            
                let meetingStartTime = meeting.startTime.replace('AM','');
                if(meetingStartTime.indexOf(':')>-1){
                    meetingFlag = true;
                    meetingStartTime = meetingStartTime.split(':')[0];
                }
                
                if(timeFlag==meetingFlag&&time<=meetingStartTime){
                    meetings.push(
                        <div className="display-meeting-tab"></div>
                    ) 
                }else if(timeFlag==meetingFlag&&time<=meetingStartTime){
                    meetings.push(
                        <div className="display-meeting-tab"></div>
                    ) 
                }
            }
        })
        return meetings;
    }
    timeBlock(dsplay,month){
        let eachTimeBlock = [];
        for(var i=this.props.startTime;i<=this.props.endTime;i++){
            eachTimeBlock.push(
               
                <div className="date-row-wise">
                    {dsplay?<div className="content-center">{i}</div>:<div><div className="empty-content">{this.checkMeetings(i,month, true)}</div><div className="empty-content">{this.checkMeetings(i+':'+30,month, false)}</div></div>}     
                </div>
               
            )
        }
        return eachTimeBlock;
    }
    dateBlock(){
        let eachDate = [];
        eachDate.push(
        <li className="date-row-wise-li">
            <div>
                <div className="calander-day"></div>
                <div className="calander-date"></div>
                {this.timeBlock(true)}
            </div>
        </li>)
        for(var i=this.props.startDate,j=1;i<=this.props.endDate;i++,j++){
            eachDate.push(
                <li className="date-row-wise-li">
                    <div>
                        <div className="calander-day">{CONSTANTS.DaysMapShort[j]}</div>
                        <div className="calander-date">{i}</div>
                        {this.timeBlock(false,i)}
                    </div>
                </li>
            )
        }
        return eachDate;
    }
    render() {
        
        return (
            <div>
                <ul className="calendar-month">
                {
                    this.dateBlock()
                }
                </ul>
            </div>
        );
    }
}

export default CalanderBody