import React from "react";

const Navbar = () => {
  const total = 25000; 
  const token = false; 

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="brand">Pizzería Mamma Mia!</span>
        <button className="nav-btn">🍕 Home</button>
      </div>

      <div className="nav-right">
        {token ? (
          <>
            <button className="nav-btn">🔓 Profile</button>
            <button className="nav-btn logout">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="nav-btn">🔐 Login</button>
            <button className="nav-btn">🔐 Register</button>
          </>
        )}
        <button className="cart-btn">🛒 Total: ${total.toLocaleString()}</button>
      </div>
    </nav>
  );
};

export default Navbar;