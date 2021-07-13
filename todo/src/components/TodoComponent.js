import { ButtonGroup, Button, Card } from "react-bootstrap";
import { useContext } from "react";
import { FirebaseContext } from "../firebase";

const TodoComponent = ({ todo }) => {
  const { user, firebase } = useContext(FirebaseContext);

  const deleteTodo = async () => {
    const todoRef = firebase.db.collection("todos").doc(todo.id);
    await todoRef
      .delete()
      .catch((e) => console.error("Error deleting todo", e));
  };

  const editTodo = async () => {
    const todoRef = firebase.db.collection("todos").doc(todo.id);
  };

  const completeTodo = async () => {
    const todoRef = firebase.db.collection("todos").doc(todo.id);
    todoRef.get().then((doc) => {
      if (doc.exists) {
        todoRef.update({ priority: "complete" });
      }
    });
  };

  return (
    <Card className="todo m-1">
      <Card.Header className="bg-navyish">
        <Card.Title>
          {todo.title.length > 15
            ? todo.title.slice(0, 14) + "..."
            : todo.title}
        </Card.Title>
      </Card.Header>
      <Card.Body
        className={
          "todo-small-body" &&
          (todo.priority === "high"
            ? "high-priority-todo"
            : todo.priority == "normal"
            ? "normal-priority-todo"
            : "low-priority-todo")
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
          <Button variant="outline-warning" onClick={editTodo}>
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
  );
};

export default TodoComponent;
