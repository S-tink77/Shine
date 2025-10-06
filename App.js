import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import GetInvolved from "./pages/GetInvolved";
import Events from "./pages/Events";
import News from "./pages/News";
import Donate from "./pages/Donate";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/programs" component={Programs} />
          <Route path="/get-involved" component={GetInvolved} />
          <Route path="/events" component={Events} />
          <Route path="/news" component={News} />
          <Route path="/donate" component={Donate} />
          <Route path="/resources" component={Resources} />
          <Route path="/contact" component={Contact} />
          <Route path="/legal" component={Legal} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;