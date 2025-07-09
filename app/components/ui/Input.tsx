"use client";

import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type = 'text',
    label,
    error,
    helperText,
    leftIcon,
    rightIcon,
    ...props 
  }, ref) => {
    const baseStyles = "w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
    const errorStyles = error ? "border-red-400 focus:ring-red-500" : "";

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-white">
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}
          
          <input
            type={type}
            className={cn(
              baseStyles,
              errorStyles,
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              className
            )}
            ref={ref}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}
        
        {helperText && !error && (
          <p className="text-sm text-gray-400">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

// Range Input Component
interface RangeInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  showValue?: boolean;
  unit?: string;
}

const RangeInput = forwardRef<HTMLInputElement, RangeInputProps>(
  ({ 
    className, 
    label,
    showValue = true,
    unit = '',
    value,
    ...props 
  }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-white">
              {label}
            </label>
            {showValue && (
              <span className="text-sm text-gray-300">
                {value}{unit}
              </span>
            )}
          </div>
        )}
        
        <input
          type="range"
          className={cn(
            "w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer custom-slider",
            className
          )}
          ref={ref}
          value={value}
          {...props}
        />
        
        <div className="flex justify-between text-xs text-gray-400">
          <span>{props.min}</span>
          <span>{props.max}</span>
        </div>
      </div>
    );
  }
);

RangeInput.displayName = "RangeInput";

// Select Component
interface SelectProps extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  options: { value: string; label: string }[];
  onChange?: (value: string) => void;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    className, 
    label,
    options,
    onChange,
    ...props 
  }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-white">
            {label}
          </label>
        )}
        
        <select
          className={cn(
            "w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
            className
          )}
          ref={ref}
          onChange={(e) => onChange?.(e.target.value)}
          {...props}
        >
          {options.map((option) => (
            <option 
              key={option.value} 
              value={option.value}
              className="bg-slate-800 text-white"
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Select.displayName = "Select";

export { Input, RangeInput, Select };
