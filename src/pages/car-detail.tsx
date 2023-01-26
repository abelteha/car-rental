import {
  ArrowArcLeft,
  ArrowCircleLeft,
  ArrowCircleRight,
} from "phosphor-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { carActions } from "../redux/carSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
// import { Slide } from "react-slideshow-image";
import DatePicker from "react-datepicker";
import { car } from "../types";

const CarDetail = () => {
  const location = useLocation();
  const cars = useAppSelector((state) => state.car);
  const dateRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const data: car = location.state;
  const {
    carName,
    carPrice,
    detail,
    features,
    id,
    images,
    includedInThePrice,
  } = data;
  console.log(images[0]);
  const [current, setCurrent] = useState(0);

  if (current === 3) {
    setCurrent(0);
  }
  const nextSlide = () => {
    setCurrent(current === length - 1 ? current : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? 2 : current - 1);
  };
  const bookFunc = (e: FormEvent) => {
    e.preventDefault();
    const enteredDate = dateRef.current?.value;
    // console.log(enteredDate);
    if (enteredDate && enteredDate?.length > 0) {
      dispatch(carActions.addCar({ ...data, date: enteredDate }));
    } else {
      alert("please select a date");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center mt-10">
        <button onClick={() => prevSlide()}>
          <ArrowCircleLeft className="text-4xl" />
        </button>
        <div>
          {images.map((item: string, index: number) => (
            <div className="overflow-hidden" key={index}>
              {index === current && (
                <img
                  src={item}
                  alt="image"
                  className=" max-w-[100%] w-[100%] sm:h-[30rem] h-[20rem] mx-auto object-contain sm:object-cover "
                />
              )}
            </div>
          ))}
        </div>
        {/* {images.map((item, index) => {
        <div>{index === current && <img src={item} alt="" />}</div>;
      })} */}
        <button onClick={() => nextSlide()}>
          <ArrowCircleRight className="text-4xl" />
        </button>
      </div>
      <h1 className="text-4xl mt-5 font-bold  my-5">{carName}</h1>
      <p className="text-xl text-gray-500 italic md:px-[15rem] px-10">
        {detail}
      </p>
      <h2 className="text-3xl font-bold text-center my-5">Features</h2>
      <ul className="text-center ">
        {features.map((feature) => (
          <li className="list-disc text-xl mb-2 text-left">{feature}</li>
        ))}
      </ul>
      <h2 className="text-3xl font-bold text-center my-5 px-5">
        Price:${carPrice}
      </h2>
      <ul className="text-center ">
        {includedInThePrice.map((included) => (
          <li className="list-disc text-xl mb-2 text-left px-5">{included}</li>
        ))}
      </ul>
      <form onSubmit={bookFunc}>
        <button
          type="submit"
          className="bg-black px-5 py-2 text-white rounded-md my-5 border-2 border-black hover:bg-white hover:text-black transition"
        >
          Book Now
        </button>
        <input
          ref={dateRef}
          type="date"
          name="date"
          id="date"
          min="01-26-2023"
          max="02-26-2023"
        />
      </form>
    </div>
  );
};
export default CarDetail;
// const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
//   day: "numeric",
//   month: "long",
//   year: "numeric",
// });
