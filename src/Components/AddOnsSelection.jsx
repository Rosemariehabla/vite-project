import React, { useState, useEffect } from "react";
import { VenueRoomCard as ItemCard } from "./ItemCard";
import "./AddOns.css"; 

import MicrophonesImg from "../assets/addons/Microphones.jpg";
import ProjectorImg from "../assets/addons/Projector.jpg";
import SignageImg from "../assets/addons/Signage.jpg";
import SpeakerImg from "../assets/addons/Speaker.jpg";
import WhiteboardsImg from "../assets/addons/Whiteboards.jpg";

export function AddOnsSelection({ setAddOnsTotal, setAddOnsItems }) {
  const initialAddOns = [
    { name: "Speakers", capacity: 15, cost: 1500, image: SpeakerImg },
    { name: "Microphones", capacity: 15, cost: 1500, image: MicrophonesImg },
    { name: "Projectors", capacity: 15, cost: 1500, image: ProjectorImg },
    { name: "Whiteboards", capacity: 15, cost: 1500, image: WhiteboardsImg },
    { name: "Signage", capacity: 15, cost: 1500, image: SignageImg }
  ];

  const [addOns, setAddOns] = useState(
    initialAddOns.map((item) => ({ ...item, quantity: 0 }))
  );

  const handleIncrement = (index) => {
    const updated = [...addOns];
    updated[index].quantity += 1;
    setAddOns(updated);
  };

  const handleDecrement = (index) => {
    const updated = [...addOns];
    if (updated[index].quantity > 0) updated[index].quantity -= 1;
    setAddOns(updated);
  };

  const subtotal = addOns.reduce(
    (sum, item) => sum + item.quantity * item.cost,
    0
  );

  useEffect(() => {
    if (setAddOnsTotal) {
      setAddOnsTotal(subtotal);
    }

    if (setAddOnsItems) {
      const selectedItems = addOns
        .filter((item) => item.quantity > 0)
        .map((item) => ({
          name: item.name,
          unitCost: item.cost,
          quantity: item.quantity
        }));
      setAddOnsItems(selectedItems);
    }
  }, [addOns, subtotal, setAddOnsTotal, setAddOnsItems]);

  return (
    <div className="addons-selection">
      <h2>Add-ons Selection</h2>
      <div className="addon-grid">
        {addOns.map((item, index) => (
          <ItemCard
            key={item.name}
            name={item.name}
            capacity={item.capacity}
            cost={item.cost}
            quantity={item.quantity}
            image={item.image}
            onIncrement={() => handleIncrement(index)}
            onDecrement={() => handleDecrement(index)}
          />
        ))}
      </div>
      <div className="total-summary">
        <h3>Subtotal for all add-ons</h3>
        <p>Total Cost: ${subtotal}</p>
      </div>
    </div>
  );
}
