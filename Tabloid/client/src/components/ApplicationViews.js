import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import TagList from "./Tag/TagList";
import PostList from "./posts/PostList";
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
        <Route path="/posts" exact>
          {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
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

        <Route path="/tags" exact>
          <TagList />
        </Route>

      </Switch>
    </main>
  );
}
