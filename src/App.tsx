import React, { useState } from 'react';
import { BsHouseFill, BsBookmarkFill, BsCameraFill } from 'react-icons/bs';
import VideoFeed from './components/VideoFeed';
import ProductModal from './components/ProductModal';
import ProgressBar from './components/ProgressBar';
import BottomNav from './components/BottomNav';

function App() {
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen bg-[#2A2A2A] flex flex-col">
      <ProgressBar isAnalyzing={isAnalyzing} progress={analysisProgress} />
      
      <div className="flex-1 relative">
        <VideoFeed onProductClick={() => setShowProductDetail(true)} />
        {showProductDetail && (
          <ProductModal onClose={() => setShowProductDetail(false)} />
        )}
      </div>

      <BottomNav />
    </div>
  );
}

export default App;