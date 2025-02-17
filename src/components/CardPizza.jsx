const CardPizza = ({ pizza }) => {
  return (
    <div className="pizza-card">
      <img src={pizza.img} alt={pizza.name} className="pizza-img" />
      <h3>{pizza.name}</h3>
      <p>{pizza.desc}</p>
      <p><strong>Ingredientes:</strong></p>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p><strong>Precio:</strong> ${pizza.price}</p>
    </div>
  );
};

export default CardPizza;