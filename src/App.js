import React from "react";
import Header from "../Components/Header";
import Form from "../Components/Form";
import Resume from "../Components/Resume";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Form />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
