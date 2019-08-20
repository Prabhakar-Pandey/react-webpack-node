import React from 'react';
import { connect } from "react-redux";
import { getBuildings, getMeetings } from "../Actions";
import RoomDetails from "./RoomsDetails";

class MeetingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBuilding: {},
    };
    this.change = this.change.bind(this);
  }

  componentWillMount() {
    let query = `{
      Buildings {
        name
        meetingRooms {
          name
          meetings {
            title
            date
            startTime
            endTime
          }
        }
      }
    }`;
    let meetingQuery = `{
      MeetingRooms {
        name
        floor
        building {
          name
        }
        meetings {
          title
          date
          startTime
          endTime
        }
      }
    }`;
    this.props.getBuildings(query);
    this.props.getMeetings(meetingQuery);
  }
  change(el){
    let selectedBuild = this.props.building.filter((building)=>{return building.name===el.target.value})
    this.setState({
      selectedBuilding:selectedBuild[0]
    })
  }
  render() {
    return (
      <div>
        <select onChange={this.change} value={this.state.selectedBuilding && this.state.selectedBuilding.name ? this.state.selectedBuilding.name: ""}>
          {
            this.props.building && this.props.building.map((building, index)=>{
              return (<option key={index} value={building.name}>{building.name}</option>)
            })
          }
        </select>
        {
          this.state.selectedBuilding && <RoomDetails buildingDetails={this.props.building} meetingRooms={this.props.meetings}/>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    building:state.Buildings,
    meetings:state.MeetingRooms
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getBuildings: (query) => {return getBuildings(query,dispatch)},
    getMeetings: (query) => {return getMeetings(query,dispatch)},
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeetingDetails);
 // export default MeetingDetails
