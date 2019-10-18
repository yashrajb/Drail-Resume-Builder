import React from "react";
const EducationView = props => {
  return <div>
         <h5>{props.degree}</h5>        
         <h5>{props.college}</h5>
         <p><b>{props.from}</b> - <b>{props.to}</b></p>
  </div>;
};

export default EducationView;