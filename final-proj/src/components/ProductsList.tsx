import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from "../context/themeContext";
import useFetch from "../hooks/useFetch";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Product {
  id: number;
  image: string;
  title: string;
}

const ProductsList = () => {
  // THEME
  const { theme } = useContext(ThemeContext);

  const { data: products } = useFetch('/products');

  return (
    <Container className="plParent">
      <Row>
        {products && products.map((product: Product) => (
          <Col key={product.id} md={4} className="p1Child1" style={{ color: theme.foreground, background: theme.background, border: theme.border }}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt="image.png" className="thumbnails" />
              <h2 style={{ color: theme.color }}>{product.title}</h2>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsList;
