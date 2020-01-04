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
import { addEducation } from "../actions/actions";
import { connect } from "react-redux";
import EducationEditForm from "./EducationEditForm";
import "../styles/educationForm.css";
class EducationForm extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.onSubmit = this.onSubmit.bind(this);
    this.clickOnCheck = this.clickOnCheck.bind(this);
    this.state = {
      error: null,
      present:false
    };
  }

  onSubmit(e) {
    e.preventDefault();
    var from = e.target.from.value;
    var to = e.target.to.value;
    var present = this.state.present;
    var college = e.target.college.value;
    var degree = e.target.degree.value;
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
    if (from && college && degree) {
      this.setState(state => {
        return {
          error: null
        };
      });
      var obj = {
        from,
        to,
        present,
        college,
        degree
      };
      this.props.addEducation(obj);
      e.target.reset();
      this.setState({
        present:false
      })
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
        <h3>Education</h3>
        {this.props.edu.map((element, index) => {
          return <EducationEditForm index={index} key={index} {...element} />;
        })}
        <Form onSubmit={this.onSubmit}>
          <p className="text-danger">{this.state.error}</p>
          <Row>
            <Col>
              <FormGroup>
                <Label for="college">College</Label>
                <Input type="text" name="college" id="college" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="company">Degree</Label>
                <Input type="text" name="degree" id="degree" />
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
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default connect(
  function(state) {
    return {
      edu: state.education
    };
  },
  function(dispatch) {
    return {
      addEducation: exp => {
        dispatch(addEducation(exp));
      }
    };
  }
)(EducationForm);
