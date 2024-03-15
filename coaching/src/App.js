import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects";
import Videos from "./components/Videos";

const App = () => (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact  path="/projects" component={Projects} />
          <Route exact  path="/videos" component={Videos} />
        </Switch>
      </BrowserRouter>
    </>
  );


export default App;
