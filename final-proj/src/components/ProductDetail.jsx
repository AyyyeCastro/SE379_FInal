import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";
import useFetch from "../hooks/useFetch";

const ProductDetail = () => {
  // THEME
  const { theme } = useContext(ThemeContext);

  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, loading } = useFetch(`/products/${id}`);

  const handleShowProducts = () => {
    navigate("../products"); // url
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: "flex", color: theme.foreground, background: theme.background, border: theme.border }} className="prodContainer">
      <button onClick={() => handleShowProducts()} className="btnBack">
        Go Back
      </button>

      <img
        src={product.image}
        alt={product.title}
        className="prodDetailImage"
      />
      <div>
        <h2 className="prodTitle">{product.title}</h2>
        <p className="prodDesc">{product.description}</p>
        <p className="prodPrice">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
