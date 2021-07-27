import React from "react";
import { Form, FormGroup, Label, Input, Container, Row, Col } from "reactstrap";
import { changeExpState } from "../actions/actions";
import { connect } from "react-redux";
class ExperienceEditForm extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      from: this.props.from,
      to: this.props.to,
      present:this.props.present,
      company: this.props.company,
      position: this.props.position,
      responsible: this.props.responsible,
      error: null,
      // added for validations
      isEdit: true,
      isEditPresent: true,
      isToEnabled: true,
    };
    this.changeProperty = this.changeProperty.bind(this);
    // for editing the saved data
    this.editForm = this.editForm.bind(this);
  }

  GetFormattedDate(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();
    if (dd < 10) dd = "0" + dd;

    if (mm < 10) mm = "0" + mm;

    return yyyy + "-" + mm + "-" + dd;
  }

  changeProperty(e) {
    var val = e.target.value;
    if (e.target.name === "present") {
      this.setState({ isToEnabled: !this.state.isToEnabled });
      val = e.target.checked;
      if(this.state.present){
        this.setState({
          to : ""
        });
        this.props.change({
          index: this.props.index,
          property: "to",
          value: "Present"
        });
      }
    }
    if (e.target.name === "to") {
      if (this.state.present) {
        return this.setState({
          error: 'You can either select "To" or "Present"'
        });
      }
    }
    this.setState({
      [e.target.name]: val,
      error: null
    });
    this.props.change({
      index: this.props.index,
      property: e.target.name,
      value: val
    });
  }

  editForm() {
    if (!this.state.isEdit) {
      if (!this.state.present && this.state.to === "") {
        this.setState({isToEnabled: false,});
        return this.setState({
          error: 'You can either select "To" or "Present"',
        });
      } else {
        this.setState({
          isEdit: true,
          isToEnabled: true,
        });
      }
    } else {

      this.setState({});
      this.setState({
        isToEnabled: this.state.present,
        isEdit: false,
      });
    }
  }

  render() {
    return (
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.editForm}
          >
            {this.state.isEdit ? "Edit" : "Save"}
          </button>
        </div>

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
                  disabled={this.state.isEdit}
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
                  disabled={this.state.isEdit}
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
                  max={this.GetFormattedDate(new Date())}
                  disabled={this.state.isEdit}
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
                  min={this.GetFormattedDate(new Date(this.state.from))}
                  disabled={this.state.isToEnabled}
                  onChange={this.changeProperty}
                  value={this.state.to}
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
                      disabled={this.state.isEdit}
                      checked={this.state.present}
                      onChange={this.changeProperty}
                    />{" "}
                      Present
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
              disabled={this.state.isEdit}
              onChange={this.changeProperty}
              value={this.state.responsible}
            />
          </FormGroup>
        </Form>
        <hr />
      </Container>
    );
  }
}

export default connect(
  undefined,
  function(dispatch) {
    return {
      change: obj => {
        dispatch(changeExpState(obj));
      }
    };
  }
)(ExperienceEditForm);
