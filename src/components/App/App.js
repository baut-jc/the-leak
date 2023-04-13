import React from 'react'
import './App.css'
import {   
  BrowserRouter as Router,
  Route, 
  Routes 
} from 'react-router-dom';
import { Articles } from '../Articles/Articles';
import { ArticleDetails } from '../ArticleDetails/ArticleDetails';

function App () {
  return (
    <div className="App">
      <h1>The Leak</h1>
      <Router>
        <Routes>
          <Route exact path="/home" render={() => <Articles card='articles' />} />
          <Route path="/article/:id" render={({ match }) => <ArticleDetails id={match.params.id} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
