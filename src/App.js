
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Book from './components/Book/Book';



function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/Home">
              <Home></Home>
          </Route>
         <Route  path="/login">
            <Login/>
          </Route>
          <Route path="/book/:bedType">
            <Book/>
         </Route>
         <Route exact path="/">
          <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
