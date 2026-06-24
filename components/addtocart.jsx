import { useState } from "react";
export default function addToCart(plant){

setCart((previousCart) => {
const itemExists = previousCart.find((item) => item.id === plant.id);

if (iitemExists) {
    return previousCart.map((item) => {
        return item.id === plant.id 
        ? {...item, quanity: item.quanity + 1 }
        : item;
    });
} else {
    const newCartItem = {
    ...plant,
    quanity: 1,
  };
  return [...previousCart, newCartItem]
  }
 });
}