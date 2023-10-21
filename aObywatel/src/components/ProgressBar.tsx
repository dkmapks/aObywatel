import React from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div style={{ width: "100%", height: "20px", backgroundColor: "#f2f2f2" }}>
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "#4CAF50",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
