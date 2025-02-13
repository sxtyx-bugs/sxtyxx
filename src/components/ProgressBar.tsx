import React from 'react';

interface ProgressBarProps {
  isAnalyzing: boolean;
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ isAnalyzing, progress }) => {
  if (!isAnalyzing) return null;

  return (
    <div className="bg-[#00C853] h-8">
      <div className="text-white text-xs p-1">Analyzing frame...</div>
      <div className="h-1 bg-white/30">
        <div 
          className="h-full bg-white transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;