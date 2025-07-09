"use client";

import { useState } from 'react';
import Button from "./ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { RangeInput, Select } from "./ui/Input";
import ImageUploader from './ImageUploader';
import VideoPreview from './VideoPreview';
import LiveStats from './LiveStats';
import { useToast } from './Toast';

export default function MainSection() {
  // State for video creation
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadId, setUploadId] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string | undefined>(undefined);
  const [progress, setProgress] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(5);
  const [duration, setDuration] = useState(6);
  const [quality, setQuality] = useState('4k');
  const [currentJobId, setCurrentJobId] = useState<string | null>(null);
  const [queuePosition, setQueuePosition] = useState(0);
  const [estimatedTimeRemaining, setEstimatedTimeRemaining] = useState(0);
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<'quick' | 'standard' | 'epic' | 'custom'>('standard');
  
  const { showToast } = useToast();

  // Handle image upload
  const handleImageUpload = async (file: File) => {
    setUploadedFile(file);
    setGeneratedVideoUrl(undefined);

    // Upload file to server
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Upload failed');
      }
      
      const result = await response.json();
      setUploadId(result.uploadId);
      showToast('Image uploaded successfully!', 'success');
    } catch (error) {
      console.error('Upload error:', error);
      showToast('Failed to upload image. Please try again.', 'error');
    } finally {
      setIsUploading(false);
    }
  };

  // Handle video generation with fake implementation
  const handleGenerate = async () => {
    if (!uploadedFile || !uploadId) {
      showToast('Please upload an image first', 'warning');
      return;
    }

    setIsGenerating(true);
    setProgress(0);

    try {
      // Simulate API call
      const generateResponse = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uploadId,
          zoomLevel,
          duration,
          quality,
        }),
      });

      if (!generateResponse.ok) {
        throw new Error('Generation failed to start');
      }

      const { jobId, queuePosition: initialQueuePosition, estimatedWaitTime, estimatedTotalTime } = await generateResponse.json();
      setCurrentJobId(jobId);
      setQueuePosition(initialQueuePosition || 0);
      setEstimatedTimeRemaining(estimatedTotalTime || estimatedWaitTime || 600);

      // Show queue information
      if (initialQueuePosition > 0) {
        showToast(`You're #${initialQueuePosition} in queue. Estimated wait: ${Math.ceil(estimatedWaitTime / 60)} minutes`, 'info');
      }

      // Simulate realistic progress with queue and processing phases
      let currentProgress = 0;
      let currentQueue = initialQueuePosition || 0;
      const totalTime = (estimatedTotalTime || 600) * 1000; // Convert to milliseconds
      const startTime = Date.now();

      const updateProgress = () => {
        const elapsed = Date.now() - startTime;
        const progressPercent = Math.min((elapsed / totalTime) * 100, 95);

        // Update queue position (simulate people ahead finishing)
        if (currentQueue > 0 && progressPercent > 20) {
          const shouldReduceQueue = Math.random() > 0.7; // 30% chance each update
          if (shouldReduceQueue) {
            currentQueue = Math.max(0, currentQueue - 1);
            setQueuePosition(currentQueue);
            if (currentQueue === 0) {
              showToast('🚀 Starting your video generation now!', 'info');
            }
          }
        }

        // Add some randomness to make it feel more realistic
        const jitter = Math.random() * 3 - 1.5; // ±1.5%
        currentProgress = Math.max(0, Math.min(95, progressPercent + jitter));

        setProgress(Math.floor(currentProgress));

        // Update estimated time remaining
        const remainingTime = Math.max(0, Math.floor((totalTime - elapsed) / 1000));
        setEstimatedTimeRemaining(remainingTime);

        if (currentProgress < 95) {
          // Continue updating progress
          setTimeout(updateProgress, 1500 + Math.random() * 1500); // 1.5-3 seconds interval
        } else {
          // Finish generation
          setTimeout(() => {
            setProgress(100);
            setIsGenerating(false);
            setQueuePosition(0);
            setEstimatedTimeRemaining(0);
            // Generate a fake video URL (you could use a demo video)
            setGeneratedVideoUrl('https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4');
            showToast('🎉 Your Earth Zoom Out video is ready!', 'success');

            // Show sharing encouragement after a delay
            setTimeout(() => {
              showToast('💫 Share your amazing creation with friends!', 'info');
            }, 3000);
          }, 2000);
        }
      };

      // Start progress simulation
      updateProgress();

    } catch (error) {
      console.error('Generation error:', error);
      setIsGenerating(false);
      showToast('Failed to generate video. Please try again.', 'error');
    }
  };

  const handleDownload = () => {
    if (generatedVideoUrl) {
      const link = document.createElement('a');
      link.href = generatedVideoUrl;
      link.download = 'earth-zoom-out.mp4';
      link.click();
    }
  };

  const handleShare = () => {
    if (navigator.share && generatedVideoUrl) {
      navigator.share({
        title: 'Check out my Earth Zoom Out video!',
        text: 'I created this amazing space journey video with Earth Zoom Out AI',
        url: window.location.href
      });
    } else {
      // Fallback to copy link
      navigator.clipboard.writeText(window.location.href);
      showToast('Link copied to clipboard!', 'success');
    }
  };

  const handleRegenerate = () => {
    setGeneratedVideoUrl(undefined);
    setProgress(0);
    setQueuePosition(0);
    setEstimatedTimeRemaining(0);
    showToast('Ready to create another video with different settings!', 'info');
  };

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Earth Zoom Out AI</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
              Earth Zoom Effect Generator
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Create stunning <strong>earth zoom out effects</strong> for free! Our AI-powered <strong>earth zoom out effect generator</strong> transforms any photo into epic <strong>earth zoom out to universe</strong> videos. Experience the ultimate <strong>earth zoom effect</strong> - completely <strong>gratis</strong> and easy to use!
          </p>


        </div>

        {/* Live Stats */}
        <LiveStats />

        {/* Creator Interface */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Upload & Generate */}
          <div className="space-y-6">
            <Card padding="lg">
              <CardHeader>
                <CardTitle>Upload Your Photo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <ImageUploader
                  onImageUpload={handleImageUpload}
                  isProcessing={isUploading}
                />

                {uploadedFile && (
                  <>
                    {/* Quick Settings */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-300 mb-2">Quick Presets:</p>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setZoomLevel(5);
                            setDuration(6);
                            setQuality('1080p');
                            setSelectedPreset('quick');
                          }}
                          disabled={isGenerating || isUploading}
                          className={`p-3 text-xs border rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                            selectedPreset === 'quick'
                              ? 'bg-blue-500/60 border-blue-300 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-400/50'
                              : 'bg-white/5 hover:bg-white/15 active:bg-white/20 border-white/20 hover:border-white/30 text-gray-300'
                          }`}
                        >
                          <div className="font-medium text-white">Quick</div>
                          <div className="text-gray-400 mt-1">5x • 6s • 1080p</div>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setZoomLevel(10);
                            setDuration(8);
                            setQuality('4k');
                            setSelectedPreset('standard');
                          }}
                          disabled={isGenerating || isUploading}
                          className={`p-3 text-xs border rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                            selectedPreset === 'standard'
                              ? 'bg-blue-500/60 border-blue-300 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-400/50'
                              : 'bg-white/5 hover:bg-white/15 active:bg-white/20 border-white/20 hover:border-white/30 text-gray-300'
                          }`}
                        >
                          <div className="font-medium text-white">Standard</div>
                          <div className="text-gray-400 mt-1">10x • 8s • 4K</div>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setZoomLevel(15);
                            setDuration(10);
                            setQuality('4k');
                            setSelectedPreset('epic');
                          }}
                          disabled={isGenerating || isUploading}
                          className={`p-3 text-xs border rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                            selectedPreset === 'epic'
                              ? 'bg-blue-500/60 border-blue-300 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-400/50'
                              : 'bg-white/5 hover:bg-white/15 active:bg-white/20 border-white/20 hover:border-white/30 text-gray-300'
                          }`}
                        >
                          <div className="font-medium text-white">Epic</div>
                          <div className="text-gray-400 mt-1">15x • 10s • 4K</div>
                        </button>
                      </div>
                    </div>

                    {/* Generate Button - Primary Action */}
                    <Button
                      onClick={handleGenerate}
                      disabled={!uploadedFile || !uploadId || isGenerating || isUploading}
                      isLoading={isGenerating || isUploading}
                      size="lg"
                      className="w-full"
                      leftIcon={!isGenerating && !isUploading ? "🚀" : undefined}
                    >
                      {isGenerating ? "Generating..." : isUploading ? "Uploading..." : "Generate Earth Zoom Video"}
                    </Button>

                    {/* Advanced Settings - Collapsible */}
                    <div className="border-t border-white/10 pt-4">
                      <button
                        onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
                        className="flex items-center justify-between w-full text-left text-sm text-gray-300 hover:text-white transition-colors"
                        disabled={isGenerating}
                      >
                        <span>Advanced Settings</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${showAdvancedSettings ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {showAdvancedSettings && (
                        <div className="mt-4 space-y-4 animate-fadeIn">
                          <RangeInput
                            label="Zoom Level"
                            min={2}
                            max={20}
                            value={zoomLevel}
                            onChange={(e) => {
                              setZoomLevel(Number(e.target.value));
                              setSelectedPreset('custom');
                            }}
                            disabled={isGenerating || isUploading}
                            showValue
                            unit="x"
                          />

                          <RangeInput
                            label="Duration"
                            min={3}
                            max={10}
                            value={duration}
                            onChange={(e) => {
                              setDuration(Number(e.target.value));
                              setSelectedPreset('custom');
                            }}
                            disabled={isGenerating || isUploading}
                            showValue
                            unit="s"
                          />

                          <Select
                            label="Quality"
                            value={quality}
                            onChange={(value) => {
                              setQuality(value);
                              setSelectedPreset('custom');
                            }}
                            disabled={isGenerating || isUploading}
                            options={[
                              { value: "1080p", label: "1080p (Fast)" },
                              { value: "4k", label: "4K (Best Quality)" }
                            ]}
                          />

                          <div className="text-xs text-gray-400 bg-white/5 rounded-lg p-3">
                            <p className="mb-1"><strong>Tip:</strong> Higher zoom levels and 4K quality take longer to process.</p>
                            <p>Current settings: ~{quality === '4k' ? '10' : '8'} minutes processing time</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Preview */}
          <div>
            <Card padding="lg">
              <CardHeader>
                <CardTitle>Preview & Download</CardTitle>
              </CardHeader>
              <CardContent>
                <VideoPreview
                  videoUrl={generatedVideoUrl}
                  isGenerating={isGenerating}
                  progress={progress}
                  queuePosition={queuePosition}
                  estimatedTimeRemaining={estimatedTimeRemaining}
                  onDownload={handleDownload}
                  onShare={handleShare}
                  onRegenerate={handleRegenerate}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
