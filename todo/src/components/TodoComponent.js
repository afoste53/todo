import { ButtonGroup, Button, Card } from "react-bootstrap";

const TodoComponent = ({ todo, deleteTodo }) => {
  return (
    <Card className="todo m-3">
      <Card.Header className="bg-navyish">
        <Card.Title>{todo.title}</Card.Title>
      </Card.Header>
      <Card.Body className={todo.priority === "high" && "high-priority-todo"}>
        {todo.text}
      </Card.Body>
      <Card.Footer>
        <ButtonGroup className="d-flex justify-content-around">
          <Button variant="outline-danger" onClick={deleteTodo}>
            <span>
              <i className="far fa-trash-alt" />
            </span>
          </Button>
          <Button variant="outline-success">
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
