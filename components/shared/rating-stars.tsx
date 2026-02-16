"use client";

import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  size?: "sm" | "md";
  showValue?: boolean;
}

export function RatingStars({ rating, size = "sm", showValue = true }: RatingStarsProps) {
  const starSize = size === "sm" ? "h-3.5 w-3.5" : "h-4.5 w-4.5";
  
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${starSize} ${
            i < Math.floor(rating)
              ? "fill-gold-500 text-gold-500"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
      {showValue && (
        <span className="ml-1.5 text-sm font-medium text-gray-600">
          {rating}
        </span>
      )}
    </div>
  );
}
