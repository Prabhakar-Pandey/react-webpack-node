import React from 'react';
import { connect } from "react-redux";
import { getBuildings, getMeetings } from "../Actions";
import Calander from "../Components/Calander/Calander";

class Dashbord extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    
  }
  render() {
    return (
      <div>
        <Calander today = {this.props.currentDate}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentDate : new Date().toLocaleDateString("en-US")
  }
}
function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashbord);
