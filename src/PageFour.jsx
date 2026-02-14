import React, { useState, useEffect } from "react";

const PageFour = ({ onNext }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  const fullText = `My dearest Faith,

I just wanted to remind you how much you mean to me. Every moment with you feels like a beautiful dream I never want to wake up from.

Your smile lights up my world, your laughter is my favorite melody, and your love is the greatest gift I've ever received.

I promise to cherish you, to make you laugh on your darkest days, and to love you more with each passing moment. You are my today and all of my tomorrows.

Thank you for being you — perfectly imperfect, endlessly lovable, and absolutely mine.

Forever yours,
💕`;

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 30; // milliseconds per character

    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="container page-enter">
      <h1 className="title-main" style={{ fontFamily: 'Quicksand', fontWeight: 'bold' }}>
        WORDS FROM MY HEART
      </h1>

      {/* Love letter */}
      <div className="letter-paper">
        {/* Ribbon top */}
        <div style={{ position: "absolute", top: "-15px", left: "50%", transform: "translateX(-50%)", fontSize: "1.5rem" }}>🎀</div>

        <div className="font-handwriting" style={{ fontSize: "1.2rem", lineHeight: "1.6", textAlign: "left", minHeight: "300px", whiteSpace: "pre-wrap" }}>
          {displayedText}
        </div>

        {/* Ribbon bottom */}
        <div style={{ position: "absolute", bottom: "-15px", left: "50%", transform: "translateX(-50%)", fontSize: "1.5rem" }}>🎀</div>
      </div>

      <div className="wiggle" style={{ fontSize: "3rem", marginTop: "1rem" }}>🐻💌</div>

      <button onClick={onNext} className="btn btn-primary" style={{ marginTop: "2rem" }}>
        Next 🌹
      </button>
    </div>
  );
};

export default PageFour;