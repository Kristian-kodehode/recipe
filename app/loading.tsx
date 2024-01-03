"use client";
import React from "react";
import Lottie from "lottie-react";
import animationData from "./assets/dataAnimation3.json";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Lottie animationData={animationData} />
    </div>
  );
};

export default Loading;
