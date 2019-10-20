import React from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import "../styles/resume.css";
class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Container>
        <h3>Your Resume</h3>
        <div className="resume">
          <header>
            {this.props.image?<img src={`${this.props.image}`} className="resume-image"/>:null}
          </header>
        </div>
      </Container>
    );
  }
}

export default connect(
  function(state) {
    return {
      ...state
    };
  },
  undefined
)(Resume);
