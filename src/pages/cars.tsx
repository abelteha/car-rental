import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Car from "../components/car";
import { car } from "../types";

const Cars = () => {
  const {
    data,
    isLoading,
    isError,
    refetch,
    error,
  }: {
    data: any;
    isLoading: boolean;
    isError: boolean;
    refetch: any;
    error: any;
  } = useQuery({
    queryKey: ["cars"],
    queryFn: () =>
      axios
        .get("https://mocki.io/v1/4f7bf80f-e4c8-44c5-9be2-afc649a5af96")
        .then((res) => res.data),
    structuralSharing: false,
  });
  if (isLoading) {
    return <p className="text-center text-3xl mt-[5rem]">Loading...</p>;
  }
  if (isError) {
    return <p className="text-center text-3xl mt-[5rem]">{error.message}</p>;
  }
  console.log(data);

  return (
    <div>
      <h1 className="text-center text-4xl sm:text-5xl font-extralight my-10 italic">
        Book your car today.
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {data?.cars.map((item: car) => (
          <Car key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
