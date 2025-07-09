"use client";

import { useState } from 'react';

interface VideoPreviewProps {
  videoUrl?: string;
  isGenerating?: boolean;
  progress?: number;
  queuePosition?: number;
  estimatedTimeRemaining?: number;
  onDownload?: () => void;
  onShare?: () => void;
  onRegenerate?: () => void;
}

export default function VideoPreview({
  videoUrl,
  isGenerating = false,
  progress = 0,
  queuePosition = 0,
  estimatedTimeRemaining = 0,
  onDownload,
  onShare,
  onRegenerate
}: VideoPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isGenerating) {
    const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const getStatusMessage = () => {
      if (queuePosition > 0) {
        return `You're #${queuePosition} in queue`;
      } else if (progress < 20) {
        return "Analyzing image depth and composition...";
      } else if (progress < 50) {
        return "Creating 3D depth mapping...";
      } else if (progress < 80) {
        return "Generating smooth zoom motion...";
      } else {
        return "Finalizing your epic space journey...";
      }
    };

    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-white/20 flex items-center justify-center relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>

          <div className="text-center z-10 px-4">
            {/* Queue indicator */}
            {queuePosition > 0 && (
              <div className="mb-4 p-3 bg-blue-500/20 rounded-lg border border-blue-400/30">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-300 font-medium">In Queue</span>
                </div>
                <p className="text-sm text-blue-200">
                  Position #{queuePosition} • Est. wait: {formatTime(estimatedTimeRemaining)}
                </p>
              </div>
            )}

            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Creating Your Earth Zoom Out Video</h3>
            <p className="text-gray-300 mb-4">{getStatusMessage()}</p>

            {/* Progress bar */}
            <div className="w-64 bg-white/20 rounded-full h-3 mx-auto mb-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 relative"
                style={{ width: `${progress}%` }}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-400 w-64 mx-auto">
              <span>{progress}% complete</span>
              {estimatedTimeRemaining > 0 && (
                <span>~{formatTime(estimatedTimeRemaining)} remaining</span>
              )}
            </div>
          </div>
        </div>
        
        {/* Processing steps */}
        <div className="mt-6 space-y-3">
          <div className={`flex items-center space-x-3 ${progress > 20 ? 'text-green-400' : 'text-gray-400'}`}>
            <div className={`w-2 h-2 rounded-full ${progress > 20 ? 'bg-green-400' : 'bg-gray-400'}`}></div>
            <span className="text-sm">Analyzing image depth</span>
          </div>
          <div className={`flex items-center space-x-3 ${progress > 50 ? 'text-green-400' : 'text-gray-400'}`}>
            <div className={`w-2 h-2 rounded-full ${progress > 50 ? 'bg-green-400' : 'bg-gray-400'}`}></div>
            <span className="text-sm">Creating 3D mapping</span>
          </div>
          <div className={`flex items-center space-x-3 ${progress > 80 ? 'text-green-400' : 'text-gray-400'}`}>
            <div className={`w-2 h-2 rounded-full ${progress > 80 ? 'bg-green-400' : 'bg-gray-400'}`}></div>
            <span className="text-sm">Generating zoom motion</span>
          </div>
          <div className={`flex items-center space-x-3 ${progress > 95 ? 'text-green-400' : 'text-gray-400'}`}>
            <div className={`w-2 h-2 rounded-full ${progress > 95 ? 'bg-green-400' : 'bg-gray-400'}`}></div>
            <span className="text-sm">Finalizing video</span>
          </div>
        </div>
      </div>
    );
  }

  if (!videoUrl) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-white/20 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-400">Upload an image to see your video preview here</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <video
          className="w-full aspect-video rounded-2xl shadow-2xl"
          controls
          poster="/api/placeholder/800/450"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
            <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all transform hover:scale-110">
              <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
      </div>
      
      {/* Action buttons */}
      <div className="space-y-4 mt-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onDownload}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download 4K Video</span>
          </button>

          <button
            onClick={onShare}
            className="flex-1 border border-white/30 px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            <span>Share Video</span>
          </button>
        </div>

        {/* Secondary actions */}
        <div className="flex justify-center">
          <button
            onClick={onRegenerate}
            className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Try different settings</span>
          </button>
        </div>
      </div>
      
      {/* Video info */}
      <div className="mt-4 bg-white/5 rounded-lg p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="text-center">
            <p className="text-gray-400">Resolution</p>
            <p className="font-semibold">4K (3840×2160)</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400">Duration</p>
            <p className="font-semibold">6 seconds</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400">Format</p>
            <p className="font-semibold">MP4</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400">Size</p>
            <p className="font-semibold">~15MB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
