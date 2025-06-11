import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import UsernamePage from './components/UsernamePage.jsx';
import './index.css';
import BusinessRegisterPage from './components/BusinessRegisterPage.jsx';
import LoginPage from './components/LoginPage.jsx';
import ProfilePage from './components/ProfilePage.jsx'; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<UsernamePage />} />
        <Route path="/register/business" element={<BusinessRegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
