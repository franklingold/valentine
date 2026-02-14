import React from "react";
import tochiImg from "./assets/faith1.jpg";
import tochiImg1 from "./assets/faith2.jpg";

const PageThree = ({ onNext }) => {
  const photos = [1, 2];

  return (
    <div className="container page-enter">
      <h1 className="title-main" style={{ fontFamily: 'Quicksand', fontWeight: 'bold' }}>
        FOREVER TOGETHER
      </h1>
      <div style={{ fontSize: "2rem", marginBottom: "2rem" }}>💑</div>

      {/* Photo gallery */}
      <div className="photo-grid">
        {photos.map((i) => (
          <div
            key={i}
            className="photo-card"
            style={{ 
              transform: `rotate(${(i % 2 === 0 ? 1 : -1) * (Math.random() * 4 + 1)}deg)` 
            }}
          >
            <div className="photo-placeholder">
              <img src={i === 1 ? tochiImg : tochiImg1} alt={`memory ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }} />
            </div>
            <p style={{ 
              textAlign: "center", 
              fontSize: "0.8rem", 
              color: "#666", 
              fontFamily: 'Dancing Script',
              marginTop: "5px"
            }}>
              memory #{i}
            </p>
          </div>
        ))}
      </div>

      {/* Sticky note */}
      <div 
        style={{ 
          background: "var(--cream)", 
          padding: "1.5rem", 
          borderRadius: "0.5rem", 
          transform: "rotate(1deg)", 
          borderLeft: "4px solid var(--accent)",
          marginBottom: "2rem",
          maxWidth: "350px",
          boxShadow: "var(--shadow)"
        }}
      >
        <p className="font-handwriting" style={{ fontSize: "1.2rem", margin: 0 }}>
          "We've shared so many special memories together, and I can't wait to create more!" 💗
        </p>
      </div>

      <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>📷🐻</div>

      <button onClick={onNext} className="btn btn-primary">
        Next 💌
      </button>
    </div>
  );
};

export default PageThree;