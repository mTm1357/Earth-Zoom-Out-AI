"use client";

import { useState, useEffect } from 'react';

export default function LiveStats() {
  const [activeUsers, setActiveUsers] = useState(0);
  const [videosGenerated, setVideosGenerated] = useState(0);
  const [serverLoad, setServerLoad] = useState('Low');

  useEffect(() => {
    // Simulate live stats
    const updateStats = () => {
      // Simulate active users (50-200)
      const baseUsers = 50 + Math.floor(Math.random() * 150);
      const timeVariation = Math.sin(Date.now() / 60000) * 20; // Varies with time
      setActiveUsers(Math.max(1, Math.floor(baseUsers + timeVariation)));

      // Simulate videos generated today (1000-5000)
      const baseVideos = 1000 + Math.floor(Math.random() * 4000);
      setVideosGenerated(baseVideos);

      // Simulate server load
      const loadValue = Math.random();
      if (loadValue > 0.8) {
        setServerLoad('High');
      } else if (loadValue > 0.5) {
        setServerLoad('Medium');
      } else {
        setServerLoad('Low');
      }
    };

    // Update immediately
    updateStats();

    // Update every 10-30 seconds
    const interval = setInterval(updateStats, 10000 + Math.random() * 20000);

    return () => clearInterval(interval);
  }, []);

  const getLoadColor = (load: string) => {
    switch (load) {
      case 'High': return 'text-red-400';
      case 'Medium': return 'text-yellow-400';
      default: return 'text-green-400';
    }
  };

  const getLoadIcon = (load: string) => {
    switch (load) {
      case 'High': return '🔴';
      case 'Medium': return '🟡';
      default: return '🟢';
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300">
              <span className="text-green-400 font-semibold">{activeUsers}</span> users online
            </span>
          </div>
          
          <div className="flex items-center space-x-1">
            <span className="text-blue-400">🎬</span>
            <span className="text-gray-300">
              <span className="text-blue-400 font-semibold">{videosGenerated.toLocaleString()}</span> videos today
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          <span>{getLoadIcon(serverLoad)}</span>
          <span className="text-gray-300">
            Server: <span className={`font-semibold ${getLoadColor(serverLoad)}`}>{serverLoad}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
