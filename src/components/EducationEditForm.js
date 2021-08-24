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
      present: this.props.present,
      degree: this.props.degree,
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
      console.log(this.state);
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
          error: 'You can either select "To" or "Present"',
        });
      }
    }
    this.setState({
      [e.target.name]: val,
      error: null,
    });
    this.props.change({
      index: this.props.index,
      property: e.target.name,
      value: val,
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

        <Form>
          <p className="text-danger">{this.state.error}</p>
          <Row>
            <Col>
              <FormGroup>
                <Label for="college">College</Label>
                <Input
                  type="text"
                  name="college"
                  value={this.state.college}
                  id="college"
                  disabled={this.state.isEdit}
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
                  disabled={this.state.isEdit}
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
                  disabled={this.state.isEdit}
                  value={this.state.from}
                  onChange={this.changeProperty}
                  max={this.GetFormattedDate(new Date())}
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
        </Form>
        <hr />
      </Container>
    );
  }
}

export default connect(undefined, function (dispatch) {
  return {
    change: (obj) => {
      dispatch(changeEducationState(obj));
    },
  };
})(EducationEditForm);
