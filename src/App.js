import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "@"
import Navbar from "./componenets/navbar";
import LoginForm from "./pages/login/loginForm";
import RegisterForm from "./pages/register/registerForm";
import Notfound from "./componenets/notfound";
import Movies from "./pages/movieapi/Movies";
import Movieinfo from "./pages/movieapi/movieinfo";
import Favourites from "./pages/movieapi/favouritespg";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { languageContext } from "./context/languageCOntext";
import { useState } from "react";
function App() {
  const [Contextlaguage, setContextlanguage] = useState("en");

  return (
    <div className="App">
      <BrowserRouter>
        <languageContext.Provider
          value={{ Contextlaguage, setContextlanguage }}
        >
          <Navbar />
          <Switch>
            <Route path={"/"} exact component={LoginForm}></Route>
            <Route path={"/login"} exact component={LoginForm}></Route>
            <Route path={"/register"} exact component={RegisterForm}></Route>
            <Route path={"/movies"} exact component={Movies}></Route>
            <Route path={"/movieinfo/:id"} exact component={Movieinfo}></Route>
            <Route path={"/favouritepage"} exact component={Favourites}></Route>
            <Route path={"*"} component={Notfound}></Route>
          </Switch>
        </languageContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
