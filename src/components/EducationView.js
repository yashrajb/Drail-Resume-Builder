import React from "react";
const EducationView = props => {
  return <div>
         <h5>{props.degree}</h5>        
         <p>{props.college}</p>
         <p>{props.from} - {props.to}</p>
  </div>;
};

export default EducationView;