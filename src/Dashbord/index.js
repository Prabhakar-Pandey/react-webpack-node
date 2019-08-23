import React from 'react';
import { connect } from "react-redux";
import { getBuildings, getMeetings } from "../Actions";
import Calander from "../Components/Calander/Calander";

class Dashbord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date().toLocaleDateString("en-US")
    }

    this.onNextClick = this.onNextClick.bind(this);
    this.onPrevClick = this.onPrevClick.bind(this);
  }

  componentWillMount() {

  }
  onNextClick(newDate) {
    let date = new Date().setDate(new Date(newDate).getDate() + 1);
    date = new Date(date).toLocaleDateString("en-US");
    this.setState({
      currentDate: date
    })
  }
  onPrevClick(newDate) {
    let date = new Date().setDate(new Date(newDate).getDate() - 1);
    date = new Date(date).toLocaleDateString("en-US");
    this.setState({
      currentDate: date
    })
  }
  render() {
    return (
      <div>
        <Calander
          today={this.state.currentDate}
          onNextClick={this.onNextClick}
          onPrevClick={this.onPrevClick}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    
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
