import React, { useState } from "react";
import "./ProductSelection.css";
import "./VenueSelection.css";
import { VenueSelection } from "./VenueSelection";
import { AddOnsSelection } from "./AddOnsSelection";
import { MealsSelection } from "./MealsSelection";

export function ProductSelection() {
  const categories = ["Venue", "AddOns", "Meals"];

  const [venueTotal, setVenueTotal] = useState(0);
  const [addOnsTotal, setAddOnsTotal] = useState(0);
  const [mealsTotal, setMealsTotal] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const grandTotal = venueTotal + addOnsTotal + mealsTotal;

  return (
    <div className="product-selection">
      <nav className="navbar">
        <div className="navbar-left">
          <h2>Conference Expense Planner</h2>
        </div>

        <div className="navbar-center">
          {categories.map((category, index) => (
            <p key={index} className="nav-item">{category}</p>
          ))}
        </div>

        <div className="navbar-right">
          <button className="details-btn" onClick={() => setShowDetails(true)}>
            Show Details
          </button>
        </div>
      </nav>

      <VenueSelection setVenueTotal={setVenueTotal} />
      <AddOnsSelection setAddOnsTotal={setAddOnsTotal} />
      <MealsSelection setMealsTotal={setMealsTotal} />

      {showDetails && (
  <div className="billing-summary">
    <div className="billing-header">
      <h3>Billing Summary</h3>
      <button className="exit-btn" onClick={() => setShowDetails(false)}>✕</button>
    </div>
    <table className="billing-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Venue</td><td>₱{venueTotal}</td></tr>
        <tr><td>Add-ons</td><td>₱{addOnsTotal}</td></tr>
        <tr><td>Meals</td><td>₱{mealsTotal}</td></tr>
        <tr className="grand-total">
          <td><strong>Grand Total</strong></td>
          <td><strong>₱{grandTotal}</strong></td>
        </tr>
      </tbody>
    </table>
  </div>
)}
    </div>
  );
}
