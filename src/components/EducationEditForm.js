import React from "react";
import { Form, FormGroup, Label, Input, Container, Row, Col } from "reactstrap";
import { changeEducationState } from "../actions/actions";
import { connect } from "react-redux";
class EducationEditForm extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      from: this.props.from,
      to: this.props.to,
      college: this.props.college,
      present:this.props.present,
      degree: this.props.degree,
      error:null
    };
    this.changeProperty = this.changeProperty.bind(this);
  }

  changeProperty(e) {
    var val = e.target.value;
    if(e.target.name==="present"){
      if(this.state.to){
        return this.setState({
          error:"You can either select \"To\" or \"Present\""
        });
      }
      val = e.target.checked
    }
    if(e.target.name==="to"){
      if(this.state.present){
        return this.setState({
          error:"You can either select \"To\" or \"Present\""
        });
      }
    }
    this.setState({
      [e.target.name]: val,
      error:null
    });
    this.props.change({
      index: this.props.index,
      property: e.target.name,
      value: val
    });
  }

  render() {
    return (
      <Container>
        <Form>
          <p class="text-danger">{this.state.error}</p>
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
            <Col>
              <FormGroup className="formgroup">
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="present"
                      checked={this.state.present}
                      onChange={this.changeProperty}
                    />{" "}
                      Present
                  </Label>
                </FormGroup>
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
      change: obj => {
        dispatch(changeEducationState(obj));
      }
    };
  }
)(EducationEditForm);
