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
    console.log(this.props);
    this.state = {
      error: null
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    var from = e.target.from.value;
    var to = e.target.to.value;
    var position = e.target.position.value;
    var company = e.target.company.value;
    var responsible = e.target.responsible.value;
    if (from && to && position && company && responsible) {
      this.setState(state => {
        return {
          error: null
        };
      });
      this.props.add({
        from,
        to,
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
