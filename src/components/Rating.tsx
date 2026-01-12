import React from "react";
import Star from "./Star";

interface IRating {
  rate: number;
}

const Rating = ({ rate }: IRating) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i + 1 < rate) {
          return <Star isRated />;
        }
        if (rate - i > 0 && rate - i < 1) {
          return <Star isRated isHalf />;
        }

        return <Star isRated={false} />;
      })}
    </div>
  );
};

export default Rating;
