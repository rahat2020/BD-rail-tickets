
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/Home">
              <Home></Home>
          </Route>
          <Route path="/">
              
          </Route>
          <Route path="/Home">
            
          </Route>
          <Route path="/Home">
             
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
