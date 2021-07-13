import { useContext, useState } from "react";
import { Modal, Button, Form, FormControl, ButtonGroup } from "react-bootstrap";
import { FirebaseContext } from "../firebase";

const AddTodoComponent = ({ show, setShow }) => {
  const [title, setTitle] = useState("");
  const [todoText, setTodoText] = useState("");
  const [priority, setPriority] = useState("normal");

  const { user, firebase } = useContext(FirebaseContext);

  const handleClose = () => {
    setShow(false);
    setTitle("");
    setTodoText("");
    setPriority("normal");
  };

  const handleInputChange = (e) => {
    e.target.name === "title"
      ? setTitle(e.target.value)
      : setTodoText(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.name);
  };

  const handleSaveTodo = () => {
    const newTodo = {
      title,
      todoText,
      priority,
      owner: {
        id: user.uid,
        name: user.displayName,
      },
    };
    firebase.db.collection("todos").add(newTodo);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add A Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex flex-column">
          <FormControl
            type="text"
            placeholder="Todo Title"
            value={title}
            name="title"
            onChange={handleInputChange}
            className="my-1"
          />
          <FormControl
            type="textarea"
            placeholder="Add some text if you like..."
            value={todoText}
            name="todoText"
            onChange={handleInputChange}
            className="my-1"
          />

          <ButtonGroup>
            <Button
              variant={priority === "low" ? "success" : "outline-success"}
              name="low"
              value="low"
              onClick={handlePriorityChange}
            >
              Low Priority
            </Button>
            <Button
              variant={priority === "normal" ? "warning" : "outline-warning"}
              name="normal"
              value="normal"
              onClick={handlePriorityChange}
            >
              Normal Priority
            </Button>
            <Button
              variant={priority === "high" ? "danger" : "outline-danger"}
              name="high"
              value="high"
              onClick={handlePriorityChange}
            >
              High Priority
            </Button>
          </ButtonGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Eh, Nevermind
        </Button>
        <Button variant="primary" onClick={handleSaveTodo}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTodoComponent;
