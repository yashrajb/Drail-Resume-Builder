import React from "react";
const ExperienceForm = props => {
  return (
    <div>
      <p>
       <h4>{props.position}</h4>
       <p>{props.company}</p>
       <p>{props.from} to {props.to}</p>
       <p>{props.responsible}</p>
      </p>
    </div>
  );
};

export default ExperienceForm;
