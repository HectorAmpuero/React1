import { useState } from "react";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.email || !formData.password) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    if (formData.password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setMessage("Inicio de sesión exitoso.");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Iniciar Sesión</h2>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Ingresar</button>

        {message && <p className="login-message">{message}</p>}
      </form>
    </div>
  );
};

export default Login;