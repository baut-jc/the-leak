import React from 'react'
import './App.css'
import {   
  BrowserRouter as Router,
  Route, 
  Routes 
} from 'react-router-dom';
import { Articles } from '../Articles/Articles';
import { Header } from '../Header/Header'
import ArticleDetails from '../ArticleDetails/ArticleDetails';

function App () {
  return (
    <div className="App">
      <Router>
          <Header />
        <Routes>
          <Route exact path="/" element={<Articles />} />
          <Route path="/nyt://article/:id" element={<ArticleDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
