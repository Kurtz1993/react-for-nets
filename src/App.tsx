import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
const About = React.lazy(() => import("./pages/About"));
const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <div className="container">
          <React.Suspense fallback={<span>Loading...</span>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Redirect from="/home" to="/" />
              <Route path="/about" component={About} />
              <Route path="/contact/:id" component={Contact} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </React.Suspense>
        </div>
      </Router>
    </div>
  );
};

export default App;
