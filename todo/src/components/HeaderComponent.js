import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../firebase";
import { Button, Navbar } from "react-bootstrap";
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
    <Navbar className="App-header bg-navyish p-4">
      <Navbar.Brand href="/">
        <h1>
          {loggedIn
            ? `${user.displayName}'s Todos`
            : "Catchy Name For Todo App"}
        </h1>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        {loggedIn && (
          <Button
            onClick={handleLogout}
            variant="outline-dark"
            className="text-white"
          >
            Logout
          </Button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

/*
*
*
    <Navbar className="App-header bg-navyish d-flex flex-row align-items-center">
      <h1 className="mr-auto">
        {user && console.log(user)}
        {loggedIn ? `${user.displayName}'s Todos` : "Catchy Name For Todo App"}
      </h1>
      {loggedIn && (
        <Button onClick={handleLogout} className="ml-auto">
          Logout
        </Button>
      )}
    </Navbar>
*
*
* */

export default withRouter(HeaderComponent);
