import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

function TodoInput({ onChange, values, handeleClick, add }) {
  return (
    <>
      <InputGroup>
        <Input onChange={onChange} value={values} />
        <InputGroupAddon addonType="append">
          <Button color="primary" onClick={handeleClick}>
            {add} Todo
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </>
  );
}

export default TodoInput;
