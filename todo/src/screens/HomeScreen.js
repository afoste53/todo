import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../App.css";
import SearchBarComponent from "../components/SearchBarComponent";
import TodoListComponent from "../components/TodoListComponent";

const HomeScreen = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const deleteTodo = (e) => {
    console.log();
    setTodos(
      todos.filter(
        (t) =>
          t.title !==
          e.target.parentElement.parentElement.parentElement.firstChild
            .firstChild.textContent
      )
    );
  };

  return (
    <div className="App">
      <Row className="my-4 d-flex justify-content-center">
        <SearchBarComponent handleTextChange={handleTextChange} />
      </Row>

      <Row>
        <TodoListComponent
          todos={todos}
          searchTerm={searchText}
          deleteTodo={deleteTodo}
        />
      </Row>
    </div>
  );
};

export default HomeScreen;
