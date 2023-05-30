import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import useFetch from '../hooks/useFetch';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  // THEME
  const { theme } = useContext(ThemeContext);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: product, loading } = useFetch(`/products/${id}`);
  const dispatch = useDispatch();

  const handleShowProducts = () => {
    navigate('../products'); // url
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ productId: product.id, product }));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <Container className="pdParent" style={{ color: theme.foreground, background: theme.background, border: theme.border }}>
      <img src={product.image} alt={product.title} className="prodDetailImage" />
      <div>
        <h2 className="prodTitle">{product.title}</h2>
        <p className="prodDesc">{product.description}</p>
        <p className="prodPrice">${product.price}</p>
        <Button onClick={handleAddToCart} className="btn btn-primary">
          Add to Cart
        </Button>
      </div>
      <Button onClick={() => handleShowProducts()} className="btn btn-outline btnGoback">
        Go Back
      </Button>
    </Container>
  );
};

export default ProductDetail;
