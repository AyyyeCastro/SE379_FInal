import { useSelector } from 'react-redux';

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.products);
  const cartQuantity = cartProducts.length;

  return <div>Cart Quantity: {cartQuantity}</div>;
};

export default Cart;