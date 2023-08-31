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
          <Route path="/meditaion-react" Component={HomePage} />
          <Route path="/meditaion-react/about" Component={About} />
          <Route path="/meditaion-react/merch" Component={Merch} />
          <Route path="/meditaion-react/episode" Component={Episode} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
