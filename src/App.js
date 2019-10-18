import React from 'react';
import Header from "./components/header";
import Form from "./components/Form";
import store from "./store";
import {Provider} from "react-redux";
function App() {
  return (
      <Provider store={store}>
      <Header />
      <Form/>
      </Provider>
  );
}

export default App;
