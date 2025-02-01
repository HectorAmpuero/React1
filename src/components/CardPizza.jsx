const CardPizza = ({ img, name, price, ingredients }) => {
    return (
      <div className="card">
        <img src={img} alt={name} />
        <div className="text-card">
          <h2>{name}</h2>
          <p className="text-price"><strong>Precio:</strong> ${price}</p>
          <p className="text-ingre"><strong>Ingredientes:</strong> {ingredients.join(", ")}</p>
        </div>
        <div className="boton">
          <button>Ver más</button>
          <button>Añadir</button>
        </div>
      </div>
    );
  };
  
  export default CardPizza;