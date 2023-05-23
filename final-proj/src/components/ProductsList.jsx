import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from "../context/themeContext";
import useFetch from "../hooks/useFetch";

const ProductsList = () => {
  // THEME
  const { theme } = useContext(ThemeContext);

  const { data: products } = useFetch('/products');

  return (
    <ul className="prodList" style={{ color: theme.foreground, background: theme.background, border: theme.border }}>
      {products && products.map(product => (
        <li key={product.id} className="prodItem" style={{ color: theme.foreground, background: theme.background, border: theme.border }}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt="image.png" className="thumbnails" />
            <h2 style={{ color: theme.color }}>{product.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
