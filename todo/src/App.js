import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginSignUpScreen from "./screens/LoginSignUpScreen";
import HeaderComponent from "./components/HeaderComponent";
import useAuth from "./hooks/useAuth";
import firebase, { FirebaseContext } from "./firebase";

function App() {
  const user = useAuth();
  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <HeaderComponent />
        <div className="route-container">
          <Switch>
            <Route path="/login" component={LoginSignUpScreen} />
            <Route exact path="/" component={HomeScreen} />
          </Switch>
        </div>
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
