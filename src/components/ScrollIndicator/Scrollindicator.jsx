import React, { useState, useEffect } from "react";
import "../ScrollIndicator/scrollindicator.css"; // Create this CSS file

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-container">
      <div className="scroll-progress" style={{ width: `${scrollPercentage}%` }}></div>
    </div>
  );
};

export default ScrollIndicator;
