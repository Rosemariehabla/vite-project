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

  const [venueItems, setVenueItems] = useState([]);
  const [addOnsItems, setAddOnsItems] = useState([]);
  const [mealsItems, setMealsItems] = useState([]);

  const [showDetails, setShowDetails] = useState(false);

  const allItems = [...venueItems, ...addOnsItems, ...mealsItems];
  const grandTotal = allItems.reduce(
    (sum, item) => sum + item.unitCost * item.quantity,
    0
  );

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

      <VenueSelection
        setVenueTotal={setVenueTotal}
        setVenueItems={setVenueItems}
      />
      <AddOnsSelection
        setAddOnsTotal={setAddOnsTotal}
        setAddOnsItems={setAddOnsItems}
      />
      <MealsSelection
        setMealsTotal={setMealsTotal}
        setMealsItems={setMealsItems}
      />

      {showDetails && (
        <div className="billing-summary">
          <div className="billing-header">
            <h3>Billing Summary</h3>
            <button className="exit-btn" onClick={() => setShowDetails(false)}>✕</button>
          </div>

          <table className="billing-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Unit Cost</th>
                <th>Quantity</th>
                <th>Total Cost</th>
              </tr>
            </thead>
            <tbody>
              {allItems.length === 0 ? (
                <tr>
                  <td colSpan="4">No items selected.</td>
                </tr>
              ) : (
                allItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>₱{item.unitCost}</td>
                    <td>{item.quantity}</td>
                    <td>₱{item.unitCost * item.quantity}</td>
                  </tr>
                ))
              )}
              <tr className="grand-total">
                <td colSpan="3"><strong>Grand Total</strong></td>
                <td><strong>${grandTotal}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      
    </div>
  );
}
