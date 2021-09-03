import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Blog from '../Pages/Blog'

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Home/>
      </Route>

      <Route  path='/about'>
        <About/>
      </Route>

      <Route  path='/contact'>
        <Contact/>
      </Route>

      <Route  path='/blog'>
        <Blog/>
      </Route>

    </Router>
  );
}

export default App;
