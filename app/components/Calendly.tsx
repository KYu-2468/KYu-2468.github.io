"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function Calendly() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    document.body.appendChild(script);
  }, []);

  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery("(max-width: 1000px)");

  const calendlyStyle = {
    minWidth: "320px",
    height: isSmallScreen ? "1000px" : isMediumScreen ? "1100px" : "660px",
  };

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/kevin-yu-2468/20-min-chat"
      style={calendlyStyle}
    ></div>
  );
}
