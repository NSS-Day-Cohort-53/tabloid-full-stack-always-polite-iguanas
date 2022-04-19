import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import CategoryList from "./Categories/categoryList";
import CategoryForm from "./Categories/categoryForm";
import DeleteCategory from "./Categories/categoryDelete";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
        </Route>
        <Route path="/categories" exact>
          <CategoryList />
        </Route>
        <Route path="/categories/new" exact>
          <CategoryForm />
        </Route>
        <Route path="/categories/delete/:id" exact>
          <DeleteCategory/>
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </main>
  );
}
