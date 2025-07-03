import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import logo from "./assets/logo.png";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <div className="content">
        <h1 className="title">
          <span>Virtual</span>
          <img src={logo} alt="Logo" className="logo" />
          <span>Vakil</span>
        </h1>
        <p className="tagline">Making Legal Documents Simple for Everyone</p>
        <p className="description">
          Your AI-powered legal assistant — simplifying complex legal documents,
          helping you understand with ease and confidence.
        </p>
        <div className="button-group">
          <button onClick={() => navigate("/analyze")}>📄 Analyze Document</button>
          <button onClick={() => navigate("/chat")}>🤖 Chat with Vakil</button>
          <button onClick={() => navigate("/glossary")}>📘 Glossary</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
