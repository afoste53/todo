import TodoComponent from "./TodoComponent";

const TodoListComponent = ({ todos, searchTerm, deleteTodo }) => {
  return (
    <ul className="d-flex flex-row flex-wrap justify-content-center">
      {todos
        .filter((t) => t.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((t, i) => (
          <TodoComponent key={i} todo={t} deleteTodo={deleteTodo} />
        ))}
    </ul>
  );
};

export default TodoListComponent;
