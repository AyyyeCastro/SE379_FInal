import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';

function NavigationBar() {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const handleShowHome = () => {
    navigate('home');
  };

  const handleShowProducts = () => {
    navigate('products');
  };

  const handleShowCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">SE379 AC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleShowHome}>Home</Nav.Link>
            <Nav.Link onClick={handleShowProducts}>Products</Nav.Link>

            <Nav.Link onClick={handleShowCheckout}>
              <i className="bi bi-cart-fill"></i>
              <span className="badge bg-secondary">{cartItems.length}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
