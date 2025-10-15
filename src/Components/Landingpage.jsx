import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landingpage.css";

export function Landingpage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/product-selection");
  };

  return (
    <>
      <div className="LandingHeader">
        <h1>Conference Expense Planner</h1>
        <h3>Plan Your Major Event with us!</h3>
        <button onClick={handleGetStarted}>Get Started</button>
        <div className="LandingDescription">
         <h3> Welcome to BudgetEase Solutions, your trusted partner in simplifying budget management and financial solutions. At BudgetEase, we understand the importance of effective budget planning and strive to provide intuitive, user-friendly solutions to meet the diverse needs of our clients.<br></br> with a commitment to efficiency and innovation, we empower individuals and bussiness to take control of their finances and achieve their goals with ease.<br></br> At BudgetEase solution, our mission to make budgeting effortless and accessible for everyone. Whether you're a small bussiness owner, a busy professional, or a individual looking to manage youre personal finances, we offer tailored solution to streamline your budgeting process.
          </h3>
        </div>
      </div>
    </>
  );
}
