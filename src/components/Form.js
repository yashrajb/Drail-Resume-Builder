import React from "react";
import {Form, FormGroup, Label, Input, Container,FormText } from "reactstrap";
import EducationFom from "./EducationForm";
import ExpForm from "./ExperienceForm";
import "../styles/form.css";
class ResumeForm extends React.Component {
  render() {
    return (
      <div className="form">
              <Container>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">Image</Label>
            <Input
              type="file"
              name="file"
              id="exampleFile"
              onChange={this.selectImageFile}
            />
            <FormText color="muted">choose image for your resume</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone</Label>
            <Input
              type="text"
              name="phone"
              id="phone"
            />
          </FormGroup>
          <FormGroup>
            <Label for="headline">headline</Label>
            <Input
              type="text"
              name="headline"
              id="headline"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Objective</Label>
            <Input type="textarea" name="text" id="exampleText" rows="3"/>
          </FormGroup>
          <FormGroup>
            <Label for="skills">Skills</Label>
            <Input type="text" name="skills" id="skills"/>
            <FormText className="text-muted">separate skills with comma</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="hardskills">Languages</Label>
            <Input type="text" name="hardskills" id="hardskills"/>
            <FormText className="text-muted">separate langauges with comma</FormText>
          </FormGroup>
          <EducationFom />
          <ExpForm />
        </Form>
      </Container>
      </div>
    );
  }
}

export default ResumeForm;
