import React from "react";
import { FormGroup, Label, Input, Container} from "reactstrap";
import EducationFom from "./EducationForm";
import ExpForm from "./ExperienceForm";
import Colors from "./Color";
import {
  addName,
  addHeadline,
  addDribble,
  addEmail,
  addGithub,
  addLang,
  addLinkedin,
  addWebsite,
  addObjective,
  addPhone,
  addSkills
} from "../actions/actions";
import { connect } from "react-redux";
import "../styles/form.css";
class ResumeForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeHeadline = this.onChangeHeadline.bind(this);
    this.onChangeObjective = this.onChangeObjective.bind(this);
    this.onChangeSkills = this.onChangeSkills.bind(this);
    this.onChangeLang = this.onChangeLang.bind(this);
    this.onChangeGithub = this.onChangeGithub.bind(this);
    this.onChangeDribble = this.onChangeDribble.bind(this);
    this.onChangeLinkedin = this.onChangeLinkedin.bind(this); 
    this.onChangeWebsite = this.onChangeWebsite.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
  }

  onChangeName(name) {
    name = name.target.value;
    this.props.editName(name);
  }

  onChangeEmail(email) {
    email = email.target.value;
    this.props.editEmail(email);
  }

  onChangeHeadline(headline) {
    headline = headline.target.value;
    this.props.editHeadline(headline);
  }

  onChangePhone(phone){
    phone = phone.target.value;
    this.props.editPhone(phone);
  }

  onChangeObjective(obj) {
    obj = obj.target.value;
    this.props.editObjective(obj);
  }

  onChangeSkills(skill){
    skill = skill.target.value;
    this.props.editSkills(skill);
  }
  
  onChangeLang(lang){
    lang = lang.target.value;
    this.props.editLang(lang);
  }
      
  onChangeGithub(github){
    github = github.target.value;
    this.props.editGithub(github);
  }
      
  onChangeDribble(dribble){
    dribble = dribble.target.value;
    this.props.editDribble(dribble);
  }
      
  onChangeLinkedin(linkedin){
      linkedin = linkedin.target.value;
      this.props.editLinkedin(linkedin);
  }
      
  onChangeWebsite(website){
    website = website.target.value;
    this.props.editWebsite(website);
  }

  render() {
    return (
      <div className="form">
        <Container>
          <Colors/>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" value={this.props.name} onChange={this.onChangeName}/>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" value={this.props.email} onChange={this.onChangeEmail}/>
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone</Label>
            <Input type="text" name="phone" id="phone" value={this.props.phone} onChange={this.onChangePhone}/>
          </FormGroup>
          <FormGroup>
            <Label for="headline">headline</Label>
            <Input type="text" name="headline" id="headline" value={this.props.headline} onChange={this.onChangeHeadline}/>
          </FormGroup>
          <FormGroup>
            <Label for="objective">Objective</Label>
            <Input type="textarea" name="objective" id="objective" rows="3" value={this.props.objective} onChange={this.onChangeObjective}/>
          </FormGroup>
          <FormGroup>
            <Label for="skills">Skills</Label>
            <Input type="text" name="skills" id="skills" value={this.props.skill} onChange={this.onChangeSkills}/>
          </FormGroup>
          <FormGroup>
            <Label for="lang">Languages</Label>
            <Input type="text" name="lang" id="lang" value={this.props.lang} onChange={this.onChangeLang}/>
          </FormGroup>
          <FormGroup>
            <Label for="github">Github</Label>
            <Input type="url" name="github" id="github" value={this.props.github} onChange={this.onChangeGithub}/>
          </FormGroup>
          <FormGroup>
            <Label for="dribble">Dribble</Label>
            <Input type="url" name="dribble" id="dribble" value={this.props.dribble} onChange={this.onChangeDribble}/>
          </FormGroup>
          <FormGroup>
            <Label for="linkedin">Linkedin</Label>
            <Input type="url" name="linkedin" id="linkedin" value={this.props.linkedin} onChange={this.onChangeLinkedin}/>
          </FormGroup>
          <FormGroup>
            <Label for="lang">Website</Label>
            <Input type="url" name="website" id="website" value={this.props.website} onChange={this.onChangeWebsite}/>
          </FormGroup>
          <EducationFom />
          <ExpForm />
        </Container>
      </div>
    );
  }
}

export default connect(
  function(state) {
    return {
      name: state.name,
      email: state.email,
      phone: state.phone,
      headline: state.headline,
      image:state.image,
      objective: state.objective,
      skills: state.skills,
      lang: state.lang,
      github: state.github,
      dribble: state.dribble,
      linkedin: state.linkedin,
      website: state.website
    };
  },
  function(dispatch) {
    return {
      editName: text => dispatch(addName(text)),
      editEmail:email => dispatch(addEmail(email)),
      editPhone:phone => dispatch(addPhone(phone)),
      editHeadline:headline => dispatch(addHeadline(headline)),
      editObjective:objective => dispatch(addObjective(objective)),
      editSkills:skill => dispatch(addSkills(skill)),
      editLang:lang => dispatch(addLang(lang)),
      editGithub:github => dispatch(addGithub(github)),
      editDribble:dribble => dispatch(addDribble(dribble)),
      editLinkedin:linkedin => dispatch(addLinkedin(linkedin)),
      editWebsite:website => dispatch(addWebsite(website))
    };
  }
)(ResumeForm);
