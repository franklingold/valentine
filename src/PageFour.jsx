import React, { useState, useEffect } from "react";

const PageFour = ({ onNext }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  const fullText = `My dearest Ade,

I’ve been thinking about how to say this for a while, but Valentine’s Day feels like the perfect time to be honest.

Having you in my life is something I never take for granted. Your smile has a way of making even the most stressful days feel a little lighter, and your laugh is honestly my favorite sound in the world.

I’ve admired you from a distance for a long time, and I’d love the chance to show you just how much you truly mean to me. You’re someone incredibly special, and I’m so grateful for every memory we've shared so far.

Here’s to many more moments together—hopefully, as something more.

Happy Valentine's Day,
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
        Safest Choice
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