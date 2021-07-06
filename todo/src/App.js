import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginSignUpScreen from "./screens/LoginSignUpScreen";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <div className="route-container">
        <Switch>
          <Route path="/login" component={LoginSignUpScreen} />
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
