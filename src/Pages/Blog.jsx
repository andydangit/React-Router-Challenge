import React from "react";
import { Link, useRouteMatch, Route, Switch } from "react-router-dom";
import Cars from "../Components/Cars/Cars";
import Dogs from "../Components/Dogs/Dogs";
import Recipes from "../Components/Recipes/Recipes";

function Blog() {
  const { path, url } = useRouteMatch();
  console.log(path, url);

  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/recipes`}> Recipes</Link>{" "}
        </li>
        <li>
          <Link to={`${url}/dogs`}> Dogs</Link>{" "}
        </li>
        <li>
          <Link to={`${url}/cars`}>Cars</Link>{" "}
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/recipes`}>
          <Recipes />
        </Route>
        <Route path={`${path}/dogs`}>
          <Dogs />
        </Route>
        <Route path={`${path}/cars`}>
          <Cars />
        </Route>
      </Switch>
    </div>
  );
}

export default Blog;
