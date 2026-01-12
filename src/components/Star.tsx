import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt as FaStarHalf } from "react-icons/fa";

interface IStar {
  isRated?: boolean;
  isHalf?: boolean;
}

const Star = ({ isRated = false, isHalf = false }: IStar) => {
  return (
    <span>
      {isHalf ? (
        <FaStarHalf />
      ) : isRated ? (
        <FaStar className="text-white" />
      ) : (
        <FaRegStar />
      )}
    </span>
  );
};

export default Star;
