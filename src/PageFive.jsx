import React from "react";

const PageFive = () => {
  const puns = [
    { emoji: "🌼", text: "I think about you every daisy" },
    { emoji: "🌹", text: "My heart rose when I saw you" },
    { emoji: "💐", text: "I love you bunches" },
    { emoji: "🍃", text: "I will never leaf you" },
  ];

  return (
    <div
      className="container page-enter"
      style={{ background: "linear-gradient(135deg, rgba(190,18,60,0.2), rgba(255,0,0,0.15))" }}
    >
      <h1 className="title-main" style={{ fontFamily: 'Quicksand', fontWeight: 'bold' }}>
        FLOWERS FOR MY LOVE
      </h1>

      {/* Bouquet */}
      <div style={{ fontSize: "5rem", marginBottom: "2rem" }}>💐</div>

      {/* Pun sticky notes */}
      <div className="pun-grid">
        {puns.map((pun, i) => (
          <div
            key={i}
            className="pun-card"
            style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 2}deg)` }}
          >
            <span style={{ fontSize: "1.5rem" }}>{pun.emoji}</span>
            <span className="font-handwriting" style={{ fontSize: "1.2rem" }}>{pun.text}</span>
          </div>
        ))}
      </div>

      {/* Final message */}
      <div 
        style={{ 
          background: "rgba(255,255,255,0.8)", 
          backdropFilter: "blur(4px)",
          borderRadius: "1rem", 
          padding: "1.5rem", 
          boxShadow: "var(--shadow)",
          border: "2px solid rgba(190,18,60,0.3)",
          marginTop: "1rem"
        }}
      >
        <p className="font-handwriting" style={{ fontSize: "1.5rem", color: "var(--primary)", margin: 0 }}>
          Happy Valentine's Day, Faith! 💖
        </p>
        <p className="font-handwriting" style={{ fontSize: "1.1rem", color: "#666", marginTop: "0.5rem" }}>
          You make my heart bloom 🌸
        </p>
      </div>

      <div className="wiggle" style={{ fontSize: "3rem", marginTop: "2rem" }}>🥰🌹</div>
    </div>
  );
};

export default PageFive;