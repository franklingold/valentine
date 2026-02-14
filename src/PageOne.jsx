import React, { useState, useCallback } from "react";

const PageOne = ({ onYes }) => {
  const [noPos, setNoPos] = useState(null);
  const [noText, setNoText] = useState("No");
  const noTexts = ["No", "Are you sure?", "Really?", "Think again!", "Pretty please?", "Don't do this 🥺", "Last chance!", "You're breaking my heart 💔"];
  const [noIndex, setNoIndex] = useState(0);

  const handleNoHover = useCallback(() => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    
    setNoPos({ x, y });
    
    const next = Math.min(noIndex + 1, noTexts.length - 1);
    setNoIndex(next);
    setNoText(noTexts[next]);
  }, [noIndex, noTexts]);

  return (
    <div className="container page-enter">
      {/* Cute character */}
      <div className="wiggle" style={{ fontSize: "6rem", marginBottom: "1rem" }}>🥰</div>
      
      {/* Sign */}
      <div 
        style={{ 
          background: "rgba(255,255,255,0.9)", 
          padding: "2rem", 
          borderRadius: "1rem", 
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          marginBottom: "2rem",
          maxWidth: "400px"
        }}
      >
        <h1 className="font-handwriting title-main" style={{ margin: 0 }}>
          Faith, will you be my valentine?
        </h1>
        <div style={{ fontSize: "2rem", marginTop: "10px" }}>🌹</div>
      </div>

      {/* Buttons */}
      <div className="btn-group">
        <button onClick={onYes} className="btn btn-primary bounce-gentle">
          Yes! 💖
        </button>

        <button
          onMouseEnter={handleNoHover}
          onTouchStart={handleNoHover}
          className="btn btn-no"
          style={
            noPos
              ? {
                  position: "fixed",
                  left: noPos.x,
                  top: noPos.y,
                  zIndex: 50,
                }
              : { position: "relative" }
          }
        >
          {noText}
        </button>
      </div>
    </div>
  );
};

export default PageOne;