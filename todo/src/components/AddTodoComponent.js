import { useState } from "react";
import { Modal, Button, Form, FormControl } from "react-bootstrap";

const AddTodoComponent = ({ show, setShow }) => {
  const [title, setTitle] = useState("");
  const [todoText, setTodoText] = useState("");

  const handleClose = () => setShow(false);

  const handleInputChange = (e) => {};

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add A Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Eh, Nevermind
        </Button>
        <Button variant="primary">Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTodoComponent;
