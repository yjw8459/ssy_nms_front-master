import React from "react";
import { Route } from "react-router";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <>
      <Route path="/" component={MainPage} />
    </>
  );
};

export default App;
