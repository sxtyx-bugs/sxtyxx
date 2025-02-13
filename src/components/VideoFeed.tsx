import React from 'react';

interface VideoFeedProps {
  onProductClick: () => void;
}

const VideoFeed: React.FC<VideoFeedProps> = ({ onProductClick }) => {
  return (
    <div className="relative h-full">
      <video
        className="w-full h-full object-cover"
        src="https://example.com/sample-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-4">
        <button
          onClick={onProductClick}
          className="bg-black/60 px-4 py-2 rounded-lg flex items-center space-x-2 text-white"
        >
          <span>👗</span>
          <span className="font-inter text-sm">Zara Red Dress</span>
        </button>

        <button className="bg-black/60 px-4 py-2 rounded-lg flex items-center space-x-2 text-white">
          <span>📍</span>
          <span className="font-inter text-sm">Tokyo Tower</span>
        </button>

        <button className="bg-black/60 px-4 py-2 rounded-lg flex items-center space-x-2 text-white">
          <span>💡</span>
          <span className="font-inter text-sm">Taylor Swift - 98% match</span>
        </button>
      </div>
    </div>
  );
}

export default VideoFeed;