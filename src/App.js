import React from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

import './App.scss';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail';
import Footer from './components/Footer/Footer'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/movie/:imdbID" Component={MovieDetail} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
