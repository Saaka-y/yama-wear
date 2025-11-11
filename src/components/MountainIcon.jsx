import { AccessInfo } from "@/components/AccessInfo";
import { useState } from "react";

export function MountainIcon({ iconClassName, color = "var(--mountain-icon-color)", name, accessInfo }) {

  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => {
    setShowInfo(prev => !prev);
  }

  return (
    <div className={`relative z-20 inline-block ${iconClassName}`}>
      <svg
        className="
          transition-transform duration-200
          hover:scale-130
          hover:cursor-pointer
          w-[clamp(2rem,5vw,3.5rem)]
          h-[clamp(2rem,5vw,3.5rem)]
          "
        viewBox="0 0 512 512"
        color="var(--mountain-icon-color)"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="mountain icon"
        onClick={handleShowInfo}
      >
        <path d="M425.02,233.61c-15.885,0-30.76,4.275-43.584,11.721v200.353H512c0-31.456,0-83.079,0-125.102
          C512,272.555,473.056,233.61,425.02,233.61z" fill={color}></path>
        <path d="M230.841,66.316c-73.292,0-132.709,59.409-132.709,132.71c0,18.166,0,41.997,0,67.915
          c32.728,12.187,56.11,43.761,56.11,80.687v98.056h209.309c0-48.002,0-182.543,0-246.658
          C363.551,125.725,304.134,66.316,230.841,66.316z" fill={color}></path>
        <path d="M68.177,279.441C30.522,279.441,0,309.973,0,347.628c0,32.94,0,73.394,0,98.056l136.348-0.009
          c0-24.654,0-65.107,0-98.048C136.348,309.973,105.824,279.441,68.177,279.441z" fill={color}></path>
      </svg>

      {showInfo && (
        <AccessInfo
          show={showInfo}
          name={name}
          accessInfo={accessInfo}
          onClose={() => setShowInfo(false)}
          className="absolute top-full right-1 mt-1"
        />
      )}
    </div>
  );
}
