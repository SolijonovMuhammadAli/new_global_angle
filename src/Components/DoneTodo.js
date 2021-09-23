import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Button, Alert } from "reactstrap";
function DoneTodo({ todos, handleDel }) {
  return todos.length !== 0 ? (
    todos.map((item) => (
      <div key={item} className="colApp p-2 m-1">
        <div>{item}</div>
        <div>
          <Button
            color="danger"
            className="m-2"
            onClick={() => handleDel(item)}
          >
            <AiOutlineDelete />
          </Button>
        </div>
      </div>
    ))
  ) : (
    <Alert color="warning">Bajarilayotganlar hali navjud emas</Alert>
  );
}

export default DoneTodo;
