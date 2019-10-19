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
import { changeExpState } from "../actions/actions";
import { connect } from "react-redux";
class ExperienceEditForm extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      from:this.props.from,
      to:this.props.to,
      company:this.props.company,
      position:this.props.position,
      responsible:this.props.responsible,
      error:null
    }
    this.changeProperty = this.changeProperty.bind(this);
  }

  changeProperty(e) {
      this.setState({
        [e.target.name]:e.target.value,
        error:null
      });
      this.props.change({index:this.props.index,property:e.target.name,value:e.target.value});
  }

  render() {
    return (
      <Container>
        <p class="text-danger">{this.state.error}</p>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col>
              <FormGroup>
                <Label for="position">Position</Label>
                <Input
                  type="text"
                  name="position"
                  id="position"
                  value={this.state.position}
                  onChange={this.changeProperty}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="company">Company</Label>
                <Input
                  type="text"
                  name="company"
                  id="company"
                  value={this.state.company}
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
                  onChange={this.changeProperty}
                  value={this.state.to}
                />
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
              onChange={this.changeProperty}
              value={this.state.responsible}
            />
          </FormGroup>
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
       dispatch(changeExpState(obj));
     }
    };
  }
)(ExperienceEditForm);
