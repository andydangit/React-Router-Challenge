import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import Navbar from "../Components/Navbar/Navbar";
import { AuthContext, AuthContextProvider } from "../Context/AuthContext";
import Admin from "../Components/Admin/Admin";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
