import { ButtonGroup, Button, Card } from "react-bootstrap";

const TodoComponent = ({ todo }) => {
  return (
    <Card className="todo m-3">
      <Card.Header className="bg-navyish">
        <Card.Title>{todo.title}</Card.Title>
      </Card.Header>
      <Card.Body className={todo.priority === "high" && "high-priority-to  do"}>
        {todo.text}
      </Card.Body>
      <Card.Footer>
        <ButtonGroup className="d-flex justify-content-around">
          <Button variant="outline-danger">
            <span>
              <i className="far fa-trash-alt"></i>
            </span>
          </Button>
          <Button variant="outline-success">
            <span>
              <i className="far fa-check-circle"></i>
            </span>
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};

export default TodoComponent;
