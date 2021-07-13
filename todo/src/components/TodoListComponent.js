import TodoComponent from "./TodoComponent";
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../firebase";

const TodoListComponent = ({ searchTerm, deleteTodo }) => {
  const { firebase, user } = useContext(FirebaseContext);
  const [todos, setTodos] = useState(null);

  // fn for fetching todos from db
  const fetchTodos = () => {
    firebase.db.collection("todos").onSnapshot((snapshot) => {
      const todos = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setTodos(todos);
    });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const sortByPriority = (t1, t2) => {
    if (t1.priority == "normal" && t2.priority == "low") {
      return -1;
    } else if (t1.priority == "low" && t2.priority == "normal") {
      return 1;
    } else if (t1.priority == "complete") {
      return 1;
    } else if (t2.priority == "complete") {
      return -1;
    } else if (t1.priority > t2.priority) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <ul className="d-flex  flex-wrap justify-content-center">
      {todos
        ?.filter((t) =>
          t.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((t) => t.owner.id === user.uid)
        .filter((t) => t.priority !== "complete")
        .sort(sortByPriority)
        .map((t, i) => (
          <TodoComponent key={i} todo={t} />
        ))}
    </ul>
  );
};

export default TodoListComponent;
