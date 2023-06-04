import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';
import AccomodationPage from '../pages/AccomodationPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/reset.css'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/accomodation/:id" element={<AccomodationPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
