import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./features/HomePage";
import Header from "./components/Header";
import About from "./features/About";
import Merch from "./features/Merch";
import Episode from "./features/Episode";

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={About} />
          <Route path="/merch" Component={Merch} />
          <Route path="/episode" Component={Episode} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
