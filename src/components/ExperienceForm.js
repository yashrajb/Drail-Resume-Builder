import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import { addExp } from "../actions/actions";
import { connect } from "react-redux";
import ExperienceEditForm from "./ExperienceEditForm";
class ExperienceForm extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      error: null,
      present:false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.clickOnCheck = this.clickOnCheck.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    var from = e.target.from.value;
    var to = e.target.to.value;
    var present = this.state.present;
    var position = e.target.position.value;
    var company = e.target.company.value;
    var responsible = e.target.responsible.value;
    if(present && to){
      return this.setState({
        error:"You can either select \"To\" or \"Present\""
      })
    }
    if(present===false && !to){
      return this.setState({
        error:"To or Present is required"
      })
    }
    if (from && position && company && responsible) {
      this.setState(state => {
        return {
          error: null
        };
      });
      this.props.add({
        from,
        to,
        present,
        position,
        company,
        responsible
      });
      e.target.reset();
    } else {
      this.setState(state => {
        return {
          error: "All Fields are Required"
        };
      });
    }
  }
  clickOnCheck(e){
    var val = e.target.checked;
    this.setState({
      present:val
    });
   }
  render() {
    return (
      <Container>
        <h3>Experience</h3>
        {this.props.exp.map((element,index) => {
          return <ExperienceEditForm index={index} {...element} key={index}/>;
        })}
        <Form onSubmit={this.onSubmit}>
          <p className="text-danger">{this.state.error}</p>
          <Row>
            <Col>
              <FormGroup>
                <Label for="position">Position</Label>
                <Input type="text" name="position" id="position" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="company">Company</Label>
                <Input type="text" name="company" id="company" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="from">From</Label>
                <Input type="date" name="from" id="from" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="to">To</Label>
                <Input type="date" name="to" id="to" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="formgroup">
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="present" onChange={this.clickOnCheck}/> <span>Present</span>
                  </Label>
                </FormGroup>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="responsible">Responsibility</Label>
            <Input
              type="textarea"
              name="responsible"
              id="responsible"
              rows="6"
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default connect(
  function(state) {
    return {
      exp: state.exp
    };
  },
  function(dispatch) {
    return {
      add: exp => {
        dispatch(addExp(exp));
      }
    };
  }
)(ExperienceForm);
