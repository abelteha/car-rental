import React, { FC } from "react";
import { Link } from "react-router-dom";
import { car } from "../types";

const Car: FC<{ data: car }> = ({ data }) => {
  const { id, carName, carPrice, images } = data;
  return (
    <Link to={`/${carName}`} state={data}>
      <div className="w-[20rem] h-[25rem] overflow-hidden hover:bg-gray-200 p-5 rounded-md transition">
        <img
          src={images[1]}
          alt={`${carName} image`}
          className="w-[90%] h-[15rem] object-cover overflow-hidden  mx-auto rounded-md"
          loading="lazy"
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold mt-5 text-center">{carName}</h1>
          <h3 className="text-xl text-center">${carPrice}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Car;
