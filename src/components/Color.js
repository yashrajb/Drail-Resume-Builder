import React from "react";
import { Table, Container, Label } from "reactstrap";
import { connect } from "react-redux";
import { addColor } from "../actions/actions";
import "../styles/colors.css";

class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  clickonColor(color) {
    this.props.selectColor(color);
  }
  render() {
    return (
      <Container>
        <Label>Color</Label>
        <Table>
          <tbody>
            <tr>
              <td>
                <div
                  className="color teal"
                  onClick={this.clickonColor.bind(this, "#4db6ac")}
                ></div>
              </td>
              <td>
                <div
                  className="color cyan"
                  onClick={this.clickonColor.bind(this, "#4dd0e1")}
                ></div>
              </td>
              <td>
                <div
                  className="color blue"
                  onClick={this.clickonColor.bind(this, "#64b5f6")}
                ></div>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  className="color green"
                  onClick={this.clickonColor.bind(this, "#66bb6a")}
                ></div>
              </td>
              <td>
                <div
                  className="color orange"
                  onClick={this.clickonColor.bind(this, "#ffb74d")}
                ></div>
              </td>
              <td>
                <div
                  className="color grey"
                  onClick={this.clickonColor.bind(this, "#9e9e9e")}
                ></div>
              </td>
            </tr>
          </tbody>
        </Table>
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
