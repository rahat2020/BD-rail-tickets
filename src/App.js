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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header/>
        <Switch>
          <Route path="/Home">
              <Home></Home>
          </Route>
         <Route  path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/book/:ticket">
            <Book/>
         </PrivateRoute>
         <Route exact path="/">
          <Home></Home>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
