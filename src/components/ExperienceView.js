import React from "react";
const ExperienceForm = props => {
  return (
    <div>
      <p>
       <h4>{props.position}</h4>
       <h5>{props.company}</h5>
       <h6>{props.from} to {props.to}</h6>
       <p>{props.desc}</p>
      </p>
    </div>
  );
};

export default ExperienceForm;
