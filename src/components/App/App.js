import React from 'react'
import './App.css'
import {   
  BrowserRouter as Router,
  Route, 
  Routes 
} from 'react-router-dom';
import { Articles } from '../Articles/Articles';
import { Header } from '../Header/Header'
import { ArticleDetails } from '../ArticleDetails/ArticleDetails';

function App () {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={
            <>
              <Header />
              <Articles />
            </>
          }/>
          <Route path="/article/:id" render={({ match }) => <ArticleDetails id={match.params.id} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
