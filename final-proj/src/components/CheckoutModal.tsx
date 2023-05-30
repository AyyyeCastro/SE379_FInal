/* not used */

import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const PurchaseModal = ({ show, handleClose, total }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform purchase logic here
    // You can access firstName, lastName, email, and total in this function
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Purchase</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Total: ${total}</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Confirm Purchase
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const Checkout = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [showModal, setShowModal] = useState(false);

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Calculate total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <Container>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div>
          <Row>
            {cartItems.map((item) => (
              <Col key={item.productId} xs={12} className="mb-3">
                <div className="d-flex align-items-center">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="coThumbnail"
                  />
                  <div className="ml-3">
                    <h4>{item.product.title}</h4>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.product.price}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Button variant="primary" onClick={handleCheckout}>
            Checkout
          </Button>
          <PurchaseModal
            show={showModal}
            handleClose={handleCloseModal}
            total={total}
          />
        </div>
      )}
    </Container>
  );
};

export default Checkout;
