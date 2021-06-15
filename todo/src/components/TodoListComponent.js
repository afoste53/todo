import { ButtonGroup, Card } from "react-bootstrap";
import { Button } from "bootstrap";
import TodoComponent from "./TodoComponent";

const TodoListComponent = ({ todos, searchTerm }) => {
  return (
    <ul className="d-flex flex-row flex-wrap justify-content-center">
      {todos
        .filter((t) => t.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((t, i) => (
          <TodoComponent key={i} todo={t} />
        ))}
    </ul>
  );
};

export default TodoListComponent;
