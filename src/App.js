import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="App min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Education />
                    <Skills />
                    <Projects />
                    <Achievements />
                    <Certificates />
                    <Contact />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
