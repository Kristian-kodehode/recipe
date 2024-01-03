"use client";
import React from "react";
import Lottie from "lottie-react";
import animationData from "./assets/dataAnimation3.json";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="max-w-sm aspect-square">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default Loading;
