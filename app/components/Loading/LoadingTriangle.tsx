"use client";
import React from "react";
import { Triangle } from "react-loader-spinner";
import { useMediaQuery } from "usehooks-ts";

export default function LoadingTriangle() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const triangleColor = document.documentElement.classList.contains("dark")
    ? "white"
    : "black";

  return (
    <div className="flex items-center justify-center h-40 md:h-72">
      <Triangle
        height={isSmallScreen ? "100" : "300"}
        width={isSmallScreen ? "100" : "300"}
        color={triangleColor}
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
}
