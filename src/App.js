// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Team from './components/Team'; // Ensure this path is correct
import Particle from './Particle';
import './App.css';

function App() {
    return (
        <div className="app">
            <Particle />
            <Header />
            <Sidebar />
            <main className="main-content">
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <>
                                <h1 className="event-title">
                                    Production Engineering Association (PEA) & Society of Manufacturing Engineers (SME) - Student Chapters
                                </h1>
                                <h2 className="event-cap">Department of Production Engineering</h2>
                                <h3 className="event-cap2">PSG College of Technology - Coimbatore</h3>
                            </>
                        } 
                    />
                    <Route path="/team" element={<Team />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
