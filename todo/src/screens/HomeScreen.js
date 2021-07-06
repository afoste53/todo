import { Row } from "react-bootstrap";
import { useState } from "react";
import "../App.css";
import SearchBarComponent from "../components/SearchBarComponent";
import TodoListComponent from "../components/TodoListComponent";
//import { todos } from "../data/todo_data_1";

const HomeScreen = (props) => {
  let [todos, setTodos] = useState([
    {
      title: "Go get milk",
      text: "Don't forget to go get milk on your way home from work",
      priority: "normal",
      dueDate: "",
    },
    {
      title: "Go get mineral oil",
      text: "Don't forget to go get mineral oil on your way home from work",
      priority: "high",
      dueDate: "",
    },
    {
      title: "Go get silk",
      text: "Don't forget to go get silk on your way home from work",
      priority: "normal",
      dueDate: "",
    },
    {
      title: "TODO",
      text: "Don't forget to do",
      priority: "low",
      dueDate: "",
    },
    {
      title: "Another todo",
      text: "Don't forget to do that thing",
      priority: "normal",
      dueDate: "",
    },
    {
      title: "Barf",
      text: "",
      priority: "normal",
      dueDate: "",
    },
    {
      title: "Shop for uranium",
      text: "",
      priority: "high",
      dueDate: "",
    },
    {
      title: "Buy Birthday present for kid",
      text: "Possible ideas: car, boat, train",
      priority: "normal",
      dueDate: "",
    },
    {
      title: "Buy new shoes",
      text: "",
      priority: "low",
      dueDate: "",
    },
    {
      title: "Clean bathroom",
      text: "",
      priority: "high",
      dueDate: "",
    },
    {
      title: "Clean kitchen",
      text: "",
      priority: "normal",
      dueDate: "",
    },
    {
      title: "Write thank you card",
      text: "Don't forget to write thank you cards for all the folks who attended your gala",
      priority: "normal",
      dueDate: "",
    },
    {
      title: "Call Grandma",
      text: "Make sure you call grandma for her birthday",
      priority: "normal",
      dueDate: "",
    },
    {
      title: "Shop til you drop",
      text: "",
      priority: "normal",
      dueDate: "",
    },
    {
      title: "Beat the weasel",
      text: "Don't forget to spank the hanky pank",
      priority: "high",
      dueDate: "",
    },
    {
      title: "Get Gas",
      text: "Don't forget to go get gas on your way home from work",
      priority: "normal",
      dueDate: "",
    },
  ]);

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
      <header className="App-header bg-navyish">
        <h1>Gabe's Todos</h1>
      </header>

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
