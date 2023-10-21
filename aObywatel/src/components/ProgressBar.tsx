import React from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="px-1 py-2 flex flex-col justify-center items-center w-full gap-1">
      <p className="text-sm w-full text-center">{progress}%</p>
      <div className="w-full h-1 bg-neutral-30 rounded-md">
        <div
          className="bg-primary-200 h-1 rounded-md"
          style={{ width: progress + "%" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
