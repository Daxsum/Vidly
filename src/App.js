import Movies from "./components/movies";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/ex/NavBar";
import { Component } from "react";
import Customers from "./components/ex/customers";
import Rentals from "./components/ex/rentals";
import NotFound from "./components/ex/notFound";
import MoviesForm from "./components/ex/moviesForm";
function App() {
  return (
    <main className="container">
      <NavBar />
      <Switch>
        <Route path={"/movies/:id"} component={MoviesForm} />
        <Route path={"/movies"} component={Movies} />
        <Route path={"/customers"} component={Customers} />
        <Route path={"/rentals"} component={Rentals} />
        <Route path={"/notFound"} component={NotFound} />
        <Redirect from="/" exact to="/movies" />
        <Redirect to="notFound" />
      </Switch>
    </main>
  );
}

export default App;
