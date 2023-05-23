import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { HomePage } from './components/HomePage.tsx';
import ProductsList from './components/ProductsList'; 
import ProductDetail from './components/ProductDetail';
import { ThemeProvider } from './context/themeContext';

/* ReactDOM.createRoot(document.getElementById('root')).render(

NOTE: Since it's react 18, you noted that we shouldn't use ReactDOM.render anymore 
(forces it to React 17). VSC kept giving me a red underline for the above logic, since it
could accept a null state. Putting it into an if statement got rid of it */ 

const theRoot = document.getElementById('root');

if (theRoot) {
  ReactDOM.createRoot(theRoot).render(
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
}