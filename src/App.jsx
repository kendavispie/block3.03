import PLANTS from "./data";
import { useState } from "react";
import PlantCard from "../components/plant-card"

export default function App() {
  const  [cart, setCart] = useState([])
  
  
  const addToCart = (plant) => {
    setCart((previousCart) => {
      const itemExists = previousCart.find(
        (item) => item.id === plant.id
      );

      if (itemExists) {
        return previousCart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...previousCart,
        {
          ...plant,
          quantity: 1,
        },
      ];
    });
  };

  
  
  return ( 
      <>
  <h1>Proper Plants</h1>
  <h2>Plants</h2>
 <main>
  <section className="grid">
  {PLANTS.map((plant) => (
 <PlantCard key={plant.id} 
 plant={plant}  
addToCart = {addToCart}
/>
))}
</section>

<section className="cart">
<h2>Cart</h2>

<h3>Items In Cart</h3>
{cart.map((item) => (
<p key={item.id}>
  { item.image}: {item.quantity} <button> - </button>
  </p>
   ))}
</section>
</main>
  </>
  )
}