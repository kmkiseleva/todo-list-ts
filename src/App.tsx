import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import TodosPage from "./pages/TodosPage";
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/todo-list-ts">
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={About} path="/about" exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
