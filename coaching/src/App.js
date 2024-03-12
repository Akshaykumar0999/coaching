import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Project";
import Videos from "./components/Videos";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            {" "}
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/videos">
            <Videos />
          </Route>
          <Route path="*" element={<Home to="/" />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
