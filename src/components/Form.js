import React from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { FormGroup, Label, Input, Container, Button } from "reactstrap";
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
  addSkills,
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
    if (name.target.value.match("^[A-Za-z]*$") != null) {
      name = name.target.value;
      this.props.editName(name);
    } else {
      this.props.editName("");
    }
  }

  onChangeEmail(email) {
    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    email = email.target.value;
    if (filter.test(email)) {
      this.props.editEmail(email);
    } else {
      this.props.editEmail("");
    }
  }

  onChangeHeadline(headline) {
    headline = headline.target.value;
    if (headline.length > 250) {
      this.props.editHeadline(headline);
    } else {
      this.props.editHeadline("");
    }
  }

  onChangePhone(phone) {
    phone = phone.target.value;
    this.props.editPhone(phone);
  }

  onChangeObjective(obj) {
    obj = obj.target.value;
    this.props.editObjective(obj);
  }

  onChangeSkills(skill) {
    skill = skill.target.value;
    this.props.editSkills(skill);
  }

  onChangeLang(lang) {
    lang = lang.target.value;
    this.props.editLang(lang);
  }

  onChangeGithub(github) {
    github = github.target.value;
    this.props.editGithub(github);
  }

  onChangeDribble(dribble) {
    dribble = dribble.target.value;
    this.props.editDribble(dribble);
  }

  onChangeLinkedin(linkedin) {
    linkedin = linkedin.target.value;
    this.props.editLinkedin(linkedin);
  }

  onChangeWebsite(website) {
    website = website.target.value;
    this.props.editWebsite(website);
  }

  render() {
    return (
      <div className="form">
        <Container>
          <Colors />

          <AvForm  onValidSubmit={() =>{}}>
            <AvField
              name="name"
              label="Name"
              id="name"
              pattern="^[A-Za-z]*$"
              value={this.props.name}
              onChange={this.onChangeName}
              type="text"
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter your name",
                },
                pattern: {
                  value: "^[A-Za-z]+$",
                  errorMessage:
                    "Your name must be composed only with Alphabets",
                },
              }}
            />

            <AvField
              name="email"
              label="Email Address *"
              type="email"
              id="email"
              value={this.props.email}
              onChange={this.onChangeEmail}
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter your name",
                },
              }}
            />

            <AvField
              label="Phone"
              type="number"
              name="phone"
              id="phone"
              validate={{
                maxLength: {
                  value: 10,
                  errorMessage: "Your phone number must be of 10 digits",
                },
              }}
              value={this.props.phone}
              onChange={this.onChangePhone}
            />

            <AvField
              name="headline"
              label="Summary"
              id="headline"
              value={this.props.headline}
              onChange={this.onChangeHeadline}
              type="textarea"
              validate={{
                required: {
                  value: true,
                  errorMessage:
                    "Please enter your personal or professional summary min 250 chars",
                },
                minLength: {
                  value: 250,
                  errorMessage: "Your summary should be at least 250 chars",
                },
              }}
            />
          </AvForm>

          <FormGroup>
            <Label for="objective">Objective</Label>
            <Input
              type="textarea"
              name="objective"
              id="objective"
              rows="3"
              value={this.props.objective}
              onChange={this.onChangeObjective}
            />
          </FormGroup>
          <FormGroup>
            <Label for="skills">Skills</Label>
            <Input
              type="text"
              name="skills"
              id="skills"
              value={this.props.skill}
              onChange={this.onChangeSkills}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lang">Languages</Label>
            <Input
              type="text"
              name="lang"
              id="lang"
              value={this.props.lang}
              onChange={this.onChangeLang}
            />
          </FormGroup>
          <FormGroup>
            <Label for="github">Github</Label>
            <Input
              type="url"
              name="github"
              id="github"
              value={this.props.github}
              onChange={this.onChangeGithub}
            />
          </FormGroup>
          <FormGroup>
            <Label for="dribble">Dribble</Label>
            <Input
              type="url"
              name="dribble"
              id="dribble"
              value={this.props.dribble}
              onChange={this.onChangeDribble}
            />
          </FormGroup>
          <FormGroup>
            <Label for="linkedin">Linkedin</Label>
            <Input
              type="url"
              name="linkedin"
              id="linkedin"
              value={this.props.linkedin}
              onChange={this.onChangeLinkedin}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lang">Website</Label>
            <Input
              type="url"
              name="website"
              id="website"
              value={this.props.website}
              onChange={this.onChangeWebsite}
            />
          </FormGroup>
          <EducationFom />
          <ExpForm />
        </Container>
      </div>
    );
  }
}

export default connect(
  function (state) {
    return {
      name: state.name,
      email: state.email,
      phone: state.phone,
      headline: state.headline,
      image: state.image,
      objective: state.objective,
      skills: state.skills,
      lang: state.lang,
      github: state.github,
      dribble: state.dribble,
      linkedin: state.linkedin,
      website: state.website,
    };
  },
  function (dispatch) {
    return {
      editName: (text) => dispatch(addName(text)),
      editEmail: (email) => dispatch(addEmail(email)),
      editPhone: (phone) => dispatch(addPhone(phone)),
      editHeadline: (headline) => dispatch(addHeadline(headline)),
      editObjective: (objective) => dispatch(addObjective(objective)),
      editSkills: (skill) => dispatch(addSkills(skill)),
      editLang: (lang) => dispatch(addLang(lang)),
      editGithub: (github) => dispatch(addGithub(github)),
      editDribble: (dribble) => dispatch(addDribble(dribble)),
      editLinkedin: (linkedin) => dispatch(addLinkedin(linkedin)),
      editWebsite: (website) => dispatch(addWebsite(website)),
    };
  }
)(ResumeForm);
