import {
  ButtonGroup,
  Button,
  Card,
  Modal,
  FormControl,
  Form,
} from "react-bootstrap";
import { useContext, useState } from "react";
import { FirebaseContext } from "../firebase";

const TodoComponent = ({ todo }) => {
  const { user, firebase } = useContext(FirebaseContext);

  const [showEditModal, setShowEditModal] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editTodoText, setEditTodoText] = useState(todo.todoText);
  const [editPriority, setEditPriority] = useState(todo.priority);

  const [showExpandedTodo, setShowExpandedTodo] = useState(false);
  const [editExpandedTodo, setEditExpandedTodo] = useState(false);

  const deleteTodo = async () => {
    const todoRef = firebase.db.collection("todos").doc(todo.id);
    await todoRef
      .delete()
      .catch((e) => console.error("Error deleting todo", e));
  };

  const handleInputChange = (e) => {
    e.target.name === "title"
      ? setEditTitle(e.target.value)
      : setEditTodoText(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setEditPriority(e.target.name);
  };

  const handleSave = () => {
    const todoRef = firebase.db.collection("todos").doc(todo.id);
    todoRef.get().then((doc) => {
      if (doc.exists) {
        todoRef.update({
          title: editTitle,
          todoText: editTodoText,
          priority: editPriority,
        });
      }
    });
    handleClose();
  };

  const handleClose = () => {
    setShowEditModal(false);
  };

  const expandTodo = () => {
    setShowExpandedTodo(true);
  };

  const handleCloseExpandedTodo = () => {
    setShowExpandedTodo(false);
  };

  const deleteExpandedTodo = async () => {
    await deleteTodo();
    handleCloseExpandedTodo();
  };
  const completeExpandedTodo = () => {
    completeTodo();
    handleCloseExpandedTodo();
  };

  const completeTodo = () => {
    const todoRef = firebase.db.collection("todos").doc(todo.id);
    todoRef.get().then((doc) => {
      if (doc.exists) {
        todoRef.update({ priority: "complete" });
      }
    });
  };

  const saveExpandedTodo = () => {
    handleSave();
    setEditExpandedTodo(false);
  };

  return (
    <>
      <Card className="todo m-1">
        <Card.Header className="bg-navyish" onClick={expandTodo}>
          <Card.Title>
            {todo.title.length > 15
              ? todo.title.slice(0, 14) + "..."
              : todo.title}
          </Card.Title>
        </Card.Header>
        <Card.Body
          onClick={expandTodo}
          className={
            todo.priority === "high"
              ? "high-priority-todo"
              : todo.priority == "normal"
              ? "normal-priority-todo"
              : "low-priority-todo"
          }
        >
          {todo.todoText.length > 35
            ? todo.todoText.slice(0, 34) + "..."
            : todo.todoText}
        </Card.Body>
        <Card.Footer>
          <ButtonGroup className="d-flex justify-content-around">
            <Button variant="outline-danger" onClick={deleteTodo}>
              <span>
                <i className="far fa-trash-alt" />
              </span>
            </Button>
            <Button
              variant="outline-warning"
              onClick={(e) => setShowEditModal(true)}
            >
              <span>
                <i className="far fa-edit" />
              </span>
            </Button>
            <Button variant="outline-success" onClick={completeTodo}>
              <span>
                <i className="far fa-check-circle" />
              </span>
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>

      <Modal show={showEditModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="d-flex flex-column">
            <FormControl
              type="text"
              placeholder="Todo Title"
              value={editTitle}
              name="title"
              onChange={handleInputChange}
              className="my-1 add-todo-title"
            />
            <FormControl
              type="textarea"
              placeholder="Add some text if you like..."
              value={editTodoText}
              name="todoText"
              onChange={handleInputChange}
              className="my-1"
            />
            <ButtonGroup>
              <Button
                variant={editPriority === "low" ? "success" : "outline-success"}
                name="low"
                value="low"
                onClick={handlePriorityChange}
              >
                Low Priority
              </Button>
              <Button
                variant={
                  editPriority === "normal" ? "warning" : "outline-warning"
                }
                name="normal"
                value="normal"
                onClick={handlePriorityChange}
              >
                Normal Priority
              </Button>
              <Button
                variant={editPriority === "high" ? "danger" : "outline-danger"}
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
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showExpandedTodo} onHide={handleCloseExpandedTodo}>
        <Modal.Header
          className={
            editExpandedTodo
              ? "d-flex justify-content-start bg-navyish"
              : "d-flex justify-content-center bg-navyish"
          }
        >
          <Modal.Title>
            {editExpandedTodo ? (
              <FormControl
                type="text"
                placeholder={todo.title}
                value={editTitle}
                name="title"
                onChange={handleInputChange}
              />
            ) : (
              todo.title
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className={
            todo.priority === "high"
              ? "high-priority-todo"
              : todo.priority == "normal"
              ? "normal-priority-todo"
              : "low-priority-todo"
          }
        >
          {editExpandedTodo ? (
            <>
              <FormControl
                type="text"
                value={editTodoText}
                onChange={handleInputChange}
                name="todoText"
              />
              <ButtonGroup className="d-flex justify-self-center bg-white mt-2">
                <Button
                  variant={
                    editPriority === "low" ? "success" : "outline-success"
                  }
                  name="low"
                  value="low"
                  onClick={handlePriorityChange}
                >
                  Low Priority
                </Button>
                <Button
                  variant={
                    editPriority === "normal" ? "warning" : "outline-warning"
                  }
                  name="normal"
                  value="normal"
                  onClick={handlePriorityChange}
                >
                  Normal Priority
                </Button>
                <Button
                  variant={
                    editPriority === "high" ? "danger" : "outline-danger"
                  }
                  name="high"
                  value="high"
                  onClick={handlePriorityChange}
                >
                  High Priority
                </Button>
              </ButtonGroup>
            </>
          ) : (
            todo.todoText
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <ButtonGroup className="d-flex justify-content-around">
            <Button variant="outline-danger" onClick={deleteExpandedTodo}>
              <span>
                <i className="far fa-trash-alt" />
              </span>
            </Button>
            {editExpandedTodo ? (
              <Button variant="outline-success" onClick={saveExpandedTodo}>
                <span>
                  <i className="far fa-save"></i>
                </span>
              </Button>
            ) : (
              <Button
                variant="outline-warning"
                onClick={(e) => setEditExpandedTodo(true)}
              >
                <span>
                  <i className="far fa-edit" />
                </span>
              </Button>
            )}
            <Button variant="outline-success" onClick={completeExpandedTodo}>
              <span>
                <i className="far fa-check-circle" />
              </span>
            </Button>
            <Button
              variant="outline-secondary"
              onClick={handleCloseExpandedTodo}
            >
              <i className="far fa-window-close"></i>
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TodoComponent;
