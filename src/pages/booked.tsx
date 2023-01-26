import { Trash } from "phosphor-react";
import React from "react";
import { carActions } from "../redux/carSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Booked = () => {
  const cars = useAppSelector((state) => state.car.car);
  const dispatch = useAppDispatch();

  if (cars.length === 0) {
    return (
      <p className="text-center font-bold text-3xl mt-10">No booked car.</p>
    );
  }
  const humanReadableDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  //   console.log(humanReadableDate("12-03-2015"));

  const removeCar = (id: number) => {
    dispatch(carActions.removeCar(id));
  };

  return (
    <div>
      {cars.map((c: any) => (
        <div
          key={c.id}
          className="border rounded-md flex justify-between mx-2 sm:mx-[10%] h-[5rem] items-center p-5 mb-5 mt-5"
        >
          <h1 className="text-xl sm:text-2xl">{c.carName}</h1>
          <div className="flex flex-col sm:gap-3 items-end">
            <h2 className="text-lg sm:text-xl">{humanReadableDate(c.date)}</h2>
            <span
              className="hover:bg-gray-200 rounded-full p-2 transition"
              onClick={() => removeCar(c.id)}
            >
              <Trash className="text-2xl  cursor-pointer" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Booked;
