import React from "react";
import Header from "./components/header";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route,HashRouter } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Router basename="/Drail-Resume-Builder">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Form />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
