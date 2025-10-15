import React, { useState, useEffect } from "react";
import { VenueRoomCard } from "./ItemCard";
import "./VenueSelection.css";
import ConferenceRoomImg from "../assets/venues/ConferenceRoom.jpg";
import AuditoriumHallImg from "../assets/venues/AuditoriumHall.jpg";
import LargeMeetingRoomImg from "../assets/venues/LargeMeetingRoom.jpeg";
import SmallMeetingRoomImg from "../assets/venues/SmallMeetingRoom.jpg";
import PresentationRoomImg from "../assets/venues/PresentationRoom.jpeg";

export function VenueSelection({ setVenueTotal }) {
  const initialRooms = [
    {
      name: "Conference Room",
      capacity: 15,
      cost: 1500,
      image: ConferenceRoomImg,
    },
    {
      name: "Auditorium Hall",
      capacity: 15,
      cost: 1500,
      image: AuditoriumHallImg,
    },
    {
      name: "Presentation Room",
      capacity: 40,
      cost: 3500,
      image: PresentationRoomImg,
    },
    {
      name: "Large Meeting Room",
      capacity: 20,
      cost: 1000,
      image: LargeMeetingRoomImg,
    },
    {
      name: "Small Meeting Room",
      capacity: 5,
      cost: 800,
      image: SmallMeetingRoomImg,
    },
  ];

  const [rooms, setRooms] = useState(
    initialRooms.map((room) => ({ ...room, quantity: 0 }))
  );

  const handleIncrement = (index) => {
    const updated = [...rooms];
    updated[index].quantity += 1;
    setRooms(updated);
  };

  const handleDecrement = (index) => {
    const updated = [...rooms];
    if (updated[index].quantity > 0) updated[index].quantity -= 1;
    setRooms(updated);
  };

  const subtotal = rooms.reduce(
    (sum, room) => sum + room.quantity * room.cost,
    0
  );

  // ✅ Send subtotal to parent whenever it changes
  useEffect(() => {
    setVenueTotal(subtotal);
  }, [subtotal, setVenueTotal]);

  return (
    <div className="venue-room-selection">
      <h2>Venue Room Selection</h2>
      <div className="room-grid">
        {rooms.map((room, index) => (
          <VenueRoomCard
            key={room.name}
            name={room.name}
            capacity={room.capacity}
            cost={room.cost}
            quantity={room.quantity}
            image={room.image}
            onIncrement={() => handleIncrement(index)}
            onDecrement={() => handleDecrement(index)}
          />
        ))}
      </div>
      <div className="total-summary">
        <h3>Subtotal for all rooms</h3>
        <p>Total Cost: ₱{subtotal}</p>
      </div>
    </div>
  );
}
