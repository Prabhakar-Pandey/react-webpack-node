import React from 'react';
import { connect } from "react-redux";
import { getBuildings } from "../Actions";

class RoomsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.getTotalMeetings = this.getTotalMeetings.bind(this);
  }

  getTotalMeetings(){
    let total = 0;
    this.props.meetingRooms && this.props.meetingRooms.map((meetingroom)=>{
      total = total+meetingroom.meetings.length;
    })
    return total;
  }
  render() {
    return (
      <div>
          <div>
            Building
            total: {this.props.buildingDetails && this.props.buildingDetails.length}
          </div>
          <div>
            Rooms
            total: {this.props.meetingRooms && this.props.meetingRooms.length}
          </div>
          <div>
            Meetings {this.getTotalMeetings()}
          </div>
      </div>

    );
  }
}


 export default RoomsDetails
