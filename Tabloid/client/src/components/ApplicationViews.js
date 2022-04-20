import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import PostList from "./posts/PostList";
import PostDetails from "./posts/PostDetails";
import CategoryList from "./Categories/categoryList";
import CategoryForm from "./Categories/categoryForm";

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
        <Route path="/posts" exact>
          <PostList />
        </Route>
        <Route path="/posts/:postId" exact>
          <PostDetails />
        </Route>
        <Route path="/categories/new" exact>
          <CategoryForm />
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
