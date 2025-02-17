import React, { useState } from "react";
import { pizzaCart } from "../pizzas"; // Se importa correctamente desde src

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    setCart(cart.map((item) => 
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart
      .map((item) => 
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
      .filter((item) => item.count > 0)
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="cart-container">
      <h2>🛒 Carrito de Compras</h2>
      {cart.length > 0 ? (
        cart.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} className="cart-img" />
            <div className="cart-details">
              <h4>{pizza.name}</h4>
              <p><strong>Precio:</strong> ${pizza.price}</p>
              <div className="cart-buttons">
                <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
                <span>{pizza.count}</span>
                <button onClick={() => increaseQuantity(pizza.id)}>+</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>El carrito está vacío</p>
      )}
      <h3><strong>Total:</strong> ${total}</h3>
      <button className="pay-btn">Pagar</button>
    </div>
  );
};

export default Cart;
