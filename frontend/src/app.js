import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import LoginForm from './components/loginform';
import Home from './pages/home';
import Register from './pages/register';
import Library from './pages/library';
import useToken from './hooks/useToken';

export default function App() {
    
    const { token, setToken } = useToken();

    if (!token) {
        return <LoginForm setToken={setToken} />
    }

    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/library' element={<Library />} />
                </Routes>
            </div>
        </Router>
    );
}