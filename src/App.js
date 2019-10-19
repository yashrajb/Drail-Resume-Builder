import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
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
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
