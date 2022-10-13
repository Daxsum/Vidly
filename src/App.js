import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import NavBar from "./components/ex/NavBar";
import Customers from "./components/ex/customers";
import Rentals from "./components/ex/rentals";
import NotFound from "./components/ex/notFound";
import MoviesForm from "./components/ex/moviesForm";
import LoginForm from "./components/login";
import "./App.css";
import Register from "./components/registration";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path={"/register"} component={Register} />
        <Route path={"/login"} component={LoginForm} />
        <Route path={"/moviesForm"} component={MoviesForm} />
        <Route path={"/movies/:id"} component={MoviesForm} />
        <Route path={"/movies"} component={Movies} />
        <Route path={"/customers"} component={Customers} />
        <Route path={"/rentals"} component={Rentals} />
        <Route path={"/notFound"} component={NotFound} />
        <Redirect from="/" exact to="/movies" />
        <Redirect to="notFound" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
