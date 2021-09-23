import React from "react";
import { AiOutlineCheck, AiOutlineEdit } from "react-icons/ai";
import { Button, Alert } from "reactstrap";

function AllTodo({ todos, handleDone, handleAdd }) {
  return (
    <>
      {todos.length !== 0 ? (
        todos.map((item) => (
          <div className="colApp p-2 m-1" key={item}>
            <div>{item}</div>
            <div>
              <Button
                color="success"
                className="m-2"
                onClick={() => handleDone(item)}
              >
                <AiOutlineCheck />
              </Button>
              <Button color="primary" onClick={() => handleAdd(item)}>
                <AiOutlineEdit />
              </Button>
            </div>
          </div>
        ))
      ) : (
        <Alert color="warning">Rejadagilar hali mavjud emas</Alert>
      )}
    </>
  );
}

export default AllTodo;
