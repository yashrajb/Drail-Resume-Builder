import React from "react";
import { Container, Button } from "reactstrap";
import { connect } from "react-redux";
import EducationView from "./EducationView";
import ExperienceView from "./ExperienceView";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const options = {
  orientation: "potrait",
  unit: "px",
  format: [1000,900]
};

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {

    const style = {
      resume:{
        boxShadow: "2px 2px 7px 3px grey",
        padding:"30px",
        margin:"auto",
        wordBreak: "break-all"
        },
        resumeHeaderH3:{
        marginTop:"10px"
        },
      sectionH3:{
        borderBottom:"1px solid black",
        padding:"10px 0px"
        },
      h1:{
        color:this.props.color==="white"?"black":"white"
      },
      resumeBackground:{
        background: this.props.color,
        color: this.props.color === "white" ? "black" : "white"
      }
    }
    return (
      <Container>
        <h3>Your Resume</h3>
        <div
          className="resume"
          ref={ref}
          style={{...style.resumeBackground,...style.resume}}
        >
          <header>
                <h3>{this.props.name.toUpperCase()}</h3>
                <h5>{this.props.headline}</h5>
          </header>
          <hr/>
          <section>
            {this.props.objective ?<h3 >Objective</h3> : null}
            <p>{this.props.objective}</p>
          </section>
          <section>
            {this.props.education.length ? <h3>Education</h3> : null}
            {this.props.education.map((element, index) => {
              return <EducationView {...element} index={index} key={index} />;
            })}
          </section>
          <section>
            {this.props.exp.length ? <h3>Experience</h3> : null}
            {this.props.exp.map((element, index) => {
              return <ExperienceView {...element} index={index} key={index} />;
            })}
          </section>
          <section>
            {this.props.skills ? <h3>Skills</h3> : null}
            <p>{this.props.skills}</p>
          </section>
          <section>
            {this.props.lang ? <h3>Languages</h3> : null}
            <p>{this.props.lang}</p>
          </section>
          <section>
            {this.props.name ? <h3>Personal Information</h3> : null}
            {this.props.email ? <p>Email - {`${this.props.email}`}</p> : null}
            {this.props.github ? (
              <p>Github - {`${this.props.github}`}</p>
            ) : null}
            {this.props.dribble ? (
              <p>Dribble - {`${this.props.dribble}`}</p>
            ) : null}
            {this.props.linkedin ? (
              <p>Linkedin - {`${this.props.linkedin}`}</p>
            ) : null}
            {this.props.website ? (
              <p>Website - {`${this.props.website}`}</p>
            ) : null}
          </section>
        </div>
        <p className="text-center">
          <Pdf
            targetRef={ref}
            filename="resume.pdf"
            options={options}
            x={0.5}
            y={0.5}
          >
            {({ toPdf }) => <Button onClick={toPdf}>Download</Button>}
          </Pdf>
        </p>
      </Container>
    );
  }
}

export default connect(
  function(state) {
    return {
      ...state
    };
  },
  undefined
)(Resume);
