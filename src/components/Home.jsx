import { pizzas } from "../pizzas"; 
import CardPizza from "./CardPizza"; 

const Home = () => {
  return (
    <div className="home-container">
      {pizzas.map((pizza) => (
        <CardPizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default Home;