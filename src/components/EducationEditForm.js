import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
import {
  changeEducationState
} from "../actions/actions";
import { connect } from "react-redux";
class EducationEditForm extends React.Component {
  constructor(props) {
    
    super();
    this.props = props;
    this.state = {
      from: this.props.from,
      to: this.props.from,
      college: this.props.college,
      degree: this.props.degree
    };
    this.changeProperty = this.changeProperty.bind(this);
  }

  changeProperty(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.change({
      index: this.props.index,
      property: e.target.name,
      value: e.target.value
    });
  }

  render() {
    return (
      <Container>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label for="college">College</Label>
                <Input
                  type="text"
                  name="college"
                  value={this.state.college}
                  id="college"
                  onChange={this.changeProperty}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="degree">Degree</Label>
                <Input
                  type="text"
                  name="degree"
                  id="degree"
                  value={this.state.degree}
                  onChange={this.changeProperty}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="from">From</Label>
                <Input
                  type="date"
                  name="from"
                  id="from"
                  value={this.state.from}
                  onChange={this.changeProperty}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="to">To</Label>
                <Input
                  type="date"
                  name="to"
                  id="to"
                  value={this.state.to}
                  onChange={this.changeProperty}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default connect(
  undefined,
  function(dispatch) {
    return {
      change:(obj) => {
        dispatch(changeEducationState(obj));
      }
    };
  }
)(EducationEditForm);
