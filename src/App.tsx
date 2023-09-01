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
          <Route path="/meditation-react/" Component={HomePage} />
          <Route path="/meditation-react/about" Component={About} />
          <Route path="/meditation-react/merch" Component={Merch} />
          <Route path="/meditation-react/episode" Component={Episode} />
          <Route path="*" element={<div>page not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
