import React from "react";
import { ColorRing } from "react-loader-spinner";
import { useMediaQuery } from "usehooks-ts";

export default function LoadingRing() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex items-center justify-center h-full">
      <ColorRing
        visible={true}
        height={isSmallScreen ? "160px" : "516px"}
        width={isSmallScreen ? "160px" : "516px"}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["red", "white", "blue", "green", "yellow"]}
      />
    </div>
  );
}
