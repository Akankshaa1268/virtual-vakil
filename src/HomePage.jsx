import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import logo from "./assets/logo.png"; // Ensure this path matches your file structure

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h1 className="homepage-title">
          <span className="left-text">Virtual</span>
          <img src={logo} alt="Logo" className="homepage-logo" />
          <span className="right-text">Vakil</span>
        </h1>
        <p className="homepage-tagline">Making Legal Documents Simple for Everyone</p>
        <p className="homepage-subtext">
          Your AI‑powered legal assistant — simplifying complex legal documents with ease and confidence.
        </p>
        <div className="homepage-buttons">
          <button onClick={() => navigate("/analyze")}>📄 Analyze Document</button>
          <button onClick={() => navigate("/chat")}>🤖 Chat with advisor</button>
          <button onClick={() => navigate("/glossary")}>📘 Glossary</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
