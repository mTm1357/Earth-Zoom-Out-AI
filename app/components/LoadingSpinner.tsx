"use client";

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'purple' | 'white' | 'gray';
  text?: string;
  className?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'blue', 
  text,
  className = '' 
}: LoadingSpinnerProps) {
  const getSizeClasses = () => {
    const sizes = {
      sm: 'w-4 h-4',
      md: 'w-8 h-8', 
      lg: 'w-12 h-12',
      xl: 'w-16 h-16'
    };
    return sizes[size];
  };

  const getColorClasses = () => {
    const colors = {
      blue: 'border-blue-500 border-t-transparent',
      purple: 'border-purple-500 border-t-transparent',
      white: 'border-white border-t-transparent',
      gray: 'border-gray-400 border-t-transparent'
    };
    return colors[color];
  };

  const getTextSize = () => {
    const textSizes = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base', 
      xl: 'text-lg'
    };
    return textSizes[size];
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-2 ${className}`}>
      <div 
        className={`
          ${getSizeClasses()} 
          ${getColorClasses()}
          border-2 
          rounded-full 
          animate-spin
        `}
      />
      {text && (
        <p className={`${getTextSize()} text-gray-300 font-medium`}>
          {text}
        </p>
      )}
    </div>
  );
}

// Specialized loading components
export function PageLoader({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
      <LoadingSpinner size="xl" color="white" text={text} />
    </div>
  );
}

export function ButtonLoader({ size = 'sm' }: { size?: 'sm' | 'md' }) {
  return <LoadingSpinner size={size} color="white" className="inline-flex" />;
}

export function CardLoader({ text }: { text?: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex items-center justify-center">
      <LoadingSpinner size="lg" color="blue" text={text} />
    </div>
  );
}
