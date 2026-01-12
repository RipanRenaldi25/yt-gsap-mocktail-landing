import React from "react";
import Star from "./Star";

interface IRating {
  rate: number;
}

const Rating = ({ rate }: IRating) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const key = `rate-${i}`;
        if (i + 1 < rate) {
          return <Star isRated key={key} />;
        }
        if (rate - i > 0 && rate - i < 1) {
          return <Star isRated isHalf key={key} />;
        }

        return <Star isRated={false} key={key} />;
      })}
    </div>
  );
};

export default Rating;
