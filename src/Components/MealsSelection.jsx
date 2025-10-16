import React, { useState, useEffect } from "react";
import "./MealsSelection.css";

export function MealsSelection({ setMealsTotal, setMealsItems }) {
  const [numPeople, setNumPeople] = useState(0);
  const [selectedMeals, setSelectedMeals] = useState({
    breakfast: false,
    lunch: false,
    highTea: false,
    dinner: false,
  });

  const mealOptions = {
    breakfast: { label: "Breakfast", price: 50 },
    lunch: { label: "Lunch", price: 65 },
    highTea: { label: "High Tea", price: 25 },
    dinner: { label: "Dinner", price: 70 },
  };

  const handleCheckboxChange = (meal) => {
    setSelectedMeals((prev) => ({
      ...prev,
      [meal]: !prev[meal],
    }));
  };

  const subtotal =
    Object.entries(selectedMeals)
      .filter(([_, isSelected]) => isSelected)
      .reduce((sum, [meal]) => sum + mealOptions[meal].price, 0) * numPeople;

  useEffect(() => {
    // ✅ Send subtotal to parent
    if (setMealsTotal) {
      setMealsTotal(subtotal);
    }

    // ✅ Send selected meal items to parent
    if (setMealsItems) {
      const selectedItems = Object.entries(selectedMeals)
        .filter(([_, isSelected]) => isSelected)
        .map(([mealKey]) => ({
          name: mealOptions[mealKey].label,
          unitCost: mealOptions[mealKey].price,
          quantity: numPeople
        }));
      setMealsItems(selectedItems);
    }
  }, [selectedMeals, numPeople, subtotal, setMealsTotal, setMealsItems]);

  return (
    <div className="meals-selection">
      <h2 className="section-title">Meals Selection</h2>

      <div className="people-input">
        <label>Number of People: </label>
        <input
          type="number"
          value={numPeople}
          min={0}
          onChange={(e) => setNumPeople(parseInt(e.target.value))}
        />
      </div>

      <div className="meal-options">
        {Object.entries(mealOptions).map(([key, { label, price }]) => (
          <div key={key} className="meal-option">
            <label>
              <input
                type="checkbox"
                checked={selectedMeals[key]}
                onChange={() => handleCheckboxChange(key)}
              />
              {label} — ₱{price} per person
            </label>
          </div>
        ))}
      </div>

      <div className="subtotal">
        <h3>Total Cost</h3>
        <p>${subtotal}</p>
      </div>
    </div>
  );
}
