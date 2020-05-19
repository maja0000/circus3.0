import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AllShows from './components/AllShows/AllShows';
import NotFound from './components/NotFound/NotFound';
import Book from './components/Book/Book.js';

import Contact from './components/Contact/Contact';
import Main from './components/MainPage/Main';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <ToastContainer />
      <div className="menu-links">
        <Link className="menu-item" to="/shows">
          shows
        </Link>
        <Link className="menu-item" to="/contact">
          reviews
        </Link>
        <Link className="menu-item" to="/book">
          book
        </Link>
        <Link className="menu-item" to="/home">
          home
        </Link>
      </div>
      <Switch>
        <Route exact path="/" component={Main}></Route>

        <Route exact path="/book" component={Book}></Route>
        <Route exact path="/home" component={Main}></Route>
        <Route exact path="/shows" component={AllShows}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
