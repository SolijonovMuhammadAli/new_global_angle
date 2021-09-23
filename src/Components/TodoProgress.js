import React from "react";
import { Progress } from "reactstrap";

function TodoProgress({ progressTodo }) {
  let pro;
  if (progressTodo) {
    pro = progressTodo;
  } else {
    pro = 0;
  }
  return (
    <>
      <Progress value={pro}>{pro}%</Progress>
    </>
  );
}

export default React.memo(TodoProgress);
