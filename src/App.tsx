import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import TodosPage from "./pages/TodosPage";
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/todo-list-ts" exact />
          <Route component={About} path="/todo-list-ts/about" exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
