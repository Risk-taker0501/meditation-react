import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./features/HomePage";
import Header from "./components/Header";
import About from "./features/About";
import Merch from "./features/Merch";
import Episode from "./features/Episode";
import Courses from "./features/Courses";

function App(): JSX.Element {
  return (
    <Router basename="react-meditation">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/meditation-react" Component={HomePage} />
          <Route path="/meditation-reactcourses" Component={Courses} />
          <Route path="/meditation-reactabout" Component={About} />
          <Route path="/meditation-reactmerch" Component={Merch} />
          <Route path="/meditation-reactepisode" Component={Episode} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
