//SurveyField contains logic to render a single label and text input
import React from "react";

export default ({ input, label }) => {
  return (
    <div>
      {/*now we don't have to write onBlur={input.onBlur} etc.*/}
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
