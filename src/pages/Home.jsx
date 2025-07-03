import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../assets/logo.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
       <h1 className="title">
  <span className="title-left">Virtual</span>
  <img src={logo} alt="Logo" className="logo" />
  <span className="title-right">Vakil</span>
</h1>

        <p className="tagline">Making Legal Documents Simple for Everyone</p>
        <p className="subtext">
          Your AI-powered legal assistant — simplifying complex legal documents,
          helping you understand with ease and confidence.
        </p>
        <div className="home-buttons">
          <button onClick={() => navigate("/analyze")}>
            📄 Analyze Document
          </button>
          <button onClick={() => navigate("/chat")}>
            🤖 Chat with Vakil
          </button>
          <button onClick={() => navigate("/glossary")}>
            📘 Glossary
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
