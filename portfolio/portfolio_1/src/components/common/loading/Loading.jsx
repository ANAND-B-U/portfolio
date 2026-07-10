import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import "./Loading.css";

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const hasRun = useRef(false); // guard to ensure single run

  useEffect(() => {
    if (hasRun.current) return; // block reruns
    hasRun.current = true;

    const progressObj = { val: 0 };

    gsap.to(progressObj, {
      val: 100,
      duration: 2.5,
      ease: "power1.inOut",
      onUpdate: () => {
        setProgress(Math.floor(progressObj.val));
      },
      onComplete: () => {
        setTimeout(() => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
              if (onComplete) onComplete();
            },
          });
        }, 500);
      },
    });
  }, [onComplete]);

  return (
    <div ref={containerRef} className="loading-container">
      <div className="loading-name">ANAND B</div>

      <div className="loading-progress-wrapper">
        <div className="loading-progress-bar">
          <div
            className="loading-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="loading-percentage">{progress}%</div>
    </div>
  );
};

export default Loading;
