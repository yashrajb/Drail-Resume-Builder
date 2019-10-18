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
import {
  changeEducationState
} from "../actions/actions";
import { connect } from "react-redux";
class EducationEditForm extends React.Component {
  constructor(props) {
    
    super();
    this.props = props;
    this.state = {
      from: this.props.from ? this.props.from : null,
      to: this.props.from ? this.props.to : null,
      college: this.props.college ? this.props.college : null,
      degree: this.props.degree ? this.props.degree : null
    };
    this.changeFrom = this.changeFrom.bind(this);
    this.changeTo = this.changeTo.bind(this);
    this.changeCollege = this.changeCollege.bind(this);
    this.changeDegree = this.changeDegree.bind(this);
    console.log(props);
  }

  changeFrom(e) {
    this.setState({
      from: e.target.value
    });
    this.props.Changefrom({
      index: this.props.index,
      property: "from",
      value: e.target.value
    });
  }

  changeTo(e) {
    this.setState({
      to: e.target.value
    });
    this.props.Changeto({ index: this.props.index, property: "to", value: e.target.value });
  }

  changeCollege(e) {
    this.setState({
      college: e.target.value
    });
    this.props.Changecollege({
      index: this.props.index,
      property: "college",
      value: e.target.value
    });
  }

  changeDegree(e) {
    this.setState({
      degree: e.target.value
    });
    this.props.Changedegree({
      index: this.props.index,
      property: "degree",
      value: e.target.value
    });
  }

  render() {
    return (
      <Container style={{ borderBottom: "1px solid black", padding: "20px" }}>
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
                  onChange={this.changeCollege}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="company">Degree</Label>
                <Input
                  type="text"
                  name="degree"
                  id="degree"
                  value={this.state.degree}
                  onChange={this.changeDegree}
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
                  onChange={this.changeFrom}
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
                  onChange={this.changeTo}
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
      Changedegree: obj => {
        dispatch(changeEducationState(obj));
      },
      Changecollege: obj => {
        dispatch(changeEducationState(obj));
      },
      Changefrom: obj => {
        dispatch(changeEducationState(obj));
      },
      Changeto: obj => {
        dispatch(changeEducationState(obj));
      }
    };
  }
)(EducationEditForm);
