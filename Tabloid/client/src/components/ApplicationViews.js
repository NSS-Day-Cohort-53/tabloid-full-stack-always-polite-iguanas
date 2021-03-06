import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import TagList from "./Tag/TagList";
import PostList from "./posts/PostList";
import MyPostList from "./posts/MyPostList";
import PostDetails from "./posts/PostDetails";
import CategoryList from "./Categories/categoryList";
import CategoryForm from "./Categories/categoryForm";
import TagForm from "./Tag/TagForm";
import CommentForm from "./Comments/CommentForm";
import DeleteCategory from "./Categories/categoryDelete";
import EditCategory from "./Categories/categoryEdit";
import DeleteTag from "./Tag/TagDelete"
import EditTag from "./Tag/TagEdit"
import UserList from "./users/userList";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
        </Route>
        <Route path="/categories" exact>
          {isLoggedIn ? <CategoryList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/posts" exact>
          {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/posts/:postId(\d+)">
          {isLoggedIn ? <PostDetails /> : <Redirect to="/login" />}
        </Route>
        <Route path="/posts/myposts">
          {isLoggedIn ? <MyPostList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/categories/new" exact>
          {isLoggedIn ? <CategoryForm /> : <Redirect to="/login" />}
        </Route>
        <Route path="/posts/newComment/:postId(\d+)">
          {isLoggedIn ? <CommentForm /> : <Redirect to="/login" />}
        </Route>

        <Route path="/categories/delete/:id(\d+)" exact>
          {isLoggedIn ? <DeleteCategory /> : <Redirect to="/login" />}
        </Route>
        <Route path="/categories/edit/:id(\d+)" exact>
          {isLoggedIn ? <EditCategory /> : <Redirect to="/login" />}
        </Route>
        <Route path="/userProfiles" exact>
          {isLoggedIn ? <UserList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/tags" exact>
          {isLoggedIn ? <TagList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/tags/new">
          <TagForm />
        </Route>

        <Route path="/tags/delete/:id(\d+)" exact>
          {isLoggedIn ? <DeleteTag /> : <Redirect to="/login" />}
        </Route>

        <Route path="/tags/edit/:id(\d+)" exact>
          {isLoggedIn ? <EditTag /> : <Redirect to="/login" />}
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

//test