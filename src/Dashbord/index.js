import React from 'react';
import { connect } from "react-redux";
import { getBuildings, getMeetings } from "../Actions";
import Calander from "../Components/Calander/Calander";
import styles from "../Styles/dashbord.css";
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
        {/* <Calander
          today={this.state.currentDate}
          onNextClick={this.onNextClick}
          onPrevClick={this.onPrevClick}
        /> */}



<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary p-0">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company Name</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto pr-1">
                <li className="nav-item ">
                    <a className="nav-link" href="#"><i className="fas fa-bell"></i> <span
                            className="badge badge-pill badge-light">12</span></a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link" href="#"><i className="fas fa-comment-alt"></i>
                        <span className="badge badge-pill badge-light">2</span>
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                            className="fas fa-user-circle "></i> Account Name</a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>

        </div>
    </nav>


    <div className="container-fluid">
        <div className="row">
            <nav className="col-md-2 d-none d-md-block navbar-dark bg-primary sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <i className="fas fa-tachometer-alt"></i>
                                Home

                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fas fa-tachometer-alt"></i>
                                Interview
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fas fa-tachometer-alt"></i>
                                My Profile
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fas fa-tachometer-alt"></i>
                                Settings
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fas fa-tachometer-alt"></i>
                                Reports
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fas fa-tachometer-alt"></i>
                                Integrations
                            </a>
                        </li> */}
                    </ul>

                    {/* <h6
                        className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Saved reports</span>
                        <a className="d-flex align-items-center text-muted" href="#">

                        </a>
                    </h6> */}
                    {/* <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <a className="nav-link" href="#">

                                Current month
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">

                                Last quarter
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">

                                Social engagement
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">

                                Year-end sale
                            </a>
                        </li>
                    </ul> */}
                </div>
            </nav>

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">

                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Dashboard</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                        </div>
                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" className="feather feather-calendar">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            This week
                        </button>
                    </div>
                </div>


                <h4>CONTENT HEADING</h4>
                <Calander
                  today={this.state.currentDate}
                  onNextClick={this.onNextClick}
                  onPrevClick={this.onPrevClick}
                />

            </main>
        </div>
    </div>



















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
