import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../firebase";
import { Button, Row } from "react-bootstrap";
import { withRouter } from "react-router";

const HeaderComponent = ({ history }) => {
  const { user, firebase } = useContext(FirebaseContext);

  const [loggedIn, setLoggedIn] = useState(false);

  const handleUserChange = () => {
    if (user) {
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    firebase.logout();
    setLoggedIn(false);
    history.push("/login");
  };

  useEffect(() => {
    handleUserChange();
  }, [user]);

  return (
    <header className="App-header bg-navyish d-flex flex-row">
      <h1>
        {user && console.log(user)}
        {loggedIn ? `${user.displayName}'s Todos` : "Catchy Name For Todo App"}
      </h1>
      {loggedIn && (
        <Button onClick={handleLogout} className="justify-self-end">
          Logout
        </Button>
      )}
    </header>
  );
};

export default withRouter(HeaderComponent);
