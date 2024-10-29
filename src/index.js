// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Team from './components/Team';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/team" element={<Team />} />
      {/* Add other routes for Events, Workshops, etc. */}
    </Routes>
  </Router>,
  document.getElementById('root')
);
