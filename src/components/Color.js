import React from "react";
import { Container, Label, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { addColor } from "../actions/actions";
import "../styles/colors.css";
//This is color component
class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  clickonColor(color) {
    this.props.selectColor(color);
    console.log(color);
  }
  render() {
    return (
      <Container>
        <Label>Color</Label>
        <Row>
          <Col md="3" xl="3" lg="3">
            <div
              className="color teal"
              onClick={this.clickonColor.bind(this, "#4db6ac")}
            ></div>
          </Col>
          <Col md="3" xl="3" lg="3">
            <div
              className="color cyan"
              onClick={this.clickonColor.bind(this, "#4dd0e1")}
            ></div>
          </Col>
          <Col md="3" xl="3" lg="3">
            <div
              className="color blue"
              onClick={this.clickonColor.bind(this, "#64b5f6")}
            ></div>
          </Col>
        </Row>
        <Row>
          <Col md="3" lg="3" xl="3">
            <div
              className="color green"
              onClick={this.clickonColor.bind(this, "#66bb6a")}
            ></div>
          </Col>
          <Col md="3" lg="3" xl="3">
            <div
              className="color orange"
              onClick={this.clickonColor.bind(this, "#ffb74d")}
            ></div>
          </Col>
          <Col md="3" lg="3" xl="3">
            <div
              className="color grey"
              onClick={this.clickonColor.bind(this, "#9e9e9e")}
            ></div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(
  null,
  function(dispatch) {
    return {
      selectColor: color => dispatch(addColor(color))
    };
  }
)(Colors);
