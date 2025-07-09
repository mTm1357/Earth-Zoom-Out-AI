import { NextRequest, NextResponse } from 'next/server';

interface StatusResponse {
  jobId: string;
  status: 'processing' | 'completed' | 'failed';
  progress: number;
  videoUrl?: string;
  error?: string;
  estimatedTimeRemaining?: number;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ jobId: string }> }
) {
  try {
    const { jobId } = await params;

    if (!jobId) {
      return NextResponse.json(
        { error: 'Job ID is required' },
        { status: 400 }
      );
    }

    // In a real implementation, you would:
    // 1. Query your database for the job status
    // 2. Check Replicate API for the prediction status
    // 3. Update your database with the latest status
    // 4. Return the current status

    /*
    Example Replicate status check:
    
    const response = await fetch(`https://api.replicate.com/v1/predictions/${jobId}`, {
      headers: {
        'Authorization': `Token ${process.env.REPLICATE_API_TOKEN}`,
      },
    });

    const prediction = await response.json();
    
    const statusMap = {
      'starting': 'processing',
      'processing': 'processing',
      'succeeded': 'completed',
      'failed': 'failed',
      'canceled': 'failed'
    };
    */

    // For demo purposes, simulate different statuses based on time
    const createdTime = parseInt(jobId.split('_')[1]);
    const elapsed = Date.now() - createdTime;
    const totalTime = 8000; // 8 seconds for demo

    let status: StatusResponse['status'] = 'processing';
    let progress = Math.min(Math.floor((elapsed / totalTime) * 100), 95);
    let videoUrl: string | undefined;
    let estimatedTimeRemaining = Math.max(totalTime - elapsed, 0);

    if (elapsed >= totalTime) {
      status = 'completed';
      progress = 100;
      videoUrl = '/demo-video.mp4'; // This would be the actual generated video URL
      estimatedTimeRemaining = 0;
    }

    const response: StatusResponse = {
      jobId,
      status,
      progress,
      videoUrl,
      estimatedTimeRemaining
    };

    return NextResponse.json(response);

  } catch (error) {
    console.error('Status check error:', error);
    return NextResponse.json(
      { error: 'Status check failed' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ jobId: string }> }
) {
  try {
    const { jobId } = await params;

    // In a real implementation, you would:
    // 1. Cancel the Replicate prediction
    // 2. Update the job status in your database
    // 3. Clean up any temporary files

    return NextResponse.json({
      success: true,
      message: `Job ${jobId} cancelled successfully`
    });

  } catch (error) {
    console.error('Job cancellation error:', error);
    return NextResponse.json(
      { error: 'Job cancellation failed' },
      { status: 500 }
    );
  }
}
