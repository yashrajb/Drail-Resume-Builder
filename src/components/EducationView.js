import React from "react";
const EducationView = props => {
  var to = props.present?"Present":(props.to?props.to:"");
  return (
    <div>
      <h5>{props.degree}</h5>
      <p>{props.college}</p>
      <p>
        {props.from} - {to}
      </p>
    </div>
  );
};

export default EducationView;
