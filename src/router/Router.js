import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';
import AccomodationPage from '../pages/AccomodationPage';
import Header from '../components/Header';

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
        </BrowserRouter>
    );
};

export default Router;
