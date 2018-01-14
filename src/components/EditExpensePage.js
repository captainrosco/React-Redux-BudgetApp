import React from "react";

const EditExpensePage = props => {
  return (
  <div>You are editing expense {props.match.params.id}</div>
  );
};

export default EditExpensePage;
