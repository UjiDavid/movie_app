import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import HomeScreen from './routes/HomeScreen';
import MovieScreen from './routes/MovieScreen';

const App = () => {
  return (
    <div className="app">
      <h1>MovieApp</h1>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/movie/:imdbID" element={<MovieScreen />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
