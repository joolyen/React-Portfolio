import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Wrapper from "./components/Wrapper";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Index from "./components/Index";
import Nav from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Wrapper>     
        <Router>
        <Nav />
          <div>
            <Switch>
            <Route exact path ={["/", "/index", "/ReactPortfolio"]} component={Index} />
            <Route path ="/about" component={About} />
            <Route path ="/portfolio" component={Portfolio} />
            <Route path ="/contact" component={Contact} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
