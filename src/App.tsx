import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./features/HomePage";
import Header from "./components/Header";
import About from "./features/About";
import Merch from "./features/Merch";

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/meditation-react/" Component={HomePage} />
          <Route path="/meditation-react/about" Component={About} />
          <Route path="/meditation-react/merch" Component={Merch} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
