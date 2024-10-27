import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, BrowserRouter } from "react-router-dom";
import React from 'react';
import App from './App.jsx';
import './reset.css';
import './style.css';

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
