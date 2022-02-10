import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// == CONTAINERS ==
import Navbar from "./components/Navbar/Navbar";

// == PAGES ==
import Home from "./pages/Home/Index";
import About from "./pages/About/Index";
import Contact from "./pages/Contact/Index";
import DnD from "./pages/Dnd/Index";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar loading={false} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/dnd" component={DnD} />
        </Switch>
      </div>
    </Router>
  );
}
