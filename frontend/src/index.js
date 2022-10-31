import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import './index.css';
import "./bulma.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Library from "./pages/library";
import App from "./pages/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/library'  element={<Library />} />
      </Routes>
    </div>
  </Router>
);