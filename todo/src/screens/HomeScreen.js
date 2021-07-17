import { Row } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import "../App.css";
import SearchBarComponent from "../components/SearchBarComponent";
import TodoListComponent from "../components/TodoListComponent";
import { FirebaseContext } from "../firebase";

const HomeScreen = ({ history }) => {
  const { user } = useContext(FirebaseContext);

  const [searchText, setSearchText] = useState("");

  const handleTextChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, [user]);

  return (
    <div className="App">
      <Row className="my-4 d-flex justify-content-center">
        <SearchBarComponent handleTextChange={handleTextChange} />
      </Row>

      <Row>
        <TodoListComponent searchTerm={searchText} />
      </Row>
    </div>
  );
};

export default HomeScreen;
