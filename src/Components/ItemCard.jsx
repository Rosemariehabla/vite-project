import React from "react";

export function VenueRoomCard({ name, capacity, cost, quantity, image, onIncrement, onDecrement }) {
  return (
    <div className="venue-room-card">
      <img src={image} alt={name} className="venue-image" />
      <h3>{name}</h3>
      <p>Capacity: {capacity}</p>
      <p>Cost per unit: ${cost}</p>
      <div className="quantity-controls">
        <button onClick={onDecrement}>−</button>
        <span>{quantity}</span>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}
