import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { HomePage } from './components/HomePage.jsx';
import ProductsList from './components/ProductsList'; 
import ProductDetail from './components/ProductDetail';
import { ThemeProvider } from './context/themeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="products" element={<ProductsList />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="*" element={<div>Route not found</div>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
