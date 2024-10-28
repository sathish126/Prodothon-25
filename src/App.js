// src/App.js
import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Particle from './Particle';

function App() {
    const eventDate = new Date('2025-02-01T00:00:00'); // Change the date as needed

    return (
        <div className="app">
            <Particle/>
            <Header />
            <main className="main-content">
                <h1 className="event-title">Prodothon'25</h1>
                <CountdownTimer targetDate={eventDate} />
                <h2 className="event-cap">PSG College Of Technology, Coimbatore</h2>
            </main>
            <div className="media-section">
                <img src={`${process.env.PUBLIC_URL}/img/main-unscreen.gif`} alt="Event Promo" className="event-gif" />
            </div>
            <Footer />
        </div>
    );
}

export default App;
