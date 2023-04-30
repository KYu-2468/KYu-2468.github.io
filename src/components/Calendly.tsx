import React, { useEffect } from "react";

export default function Calendly() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/kevin-yu-2468/20-min-chat"
      style={{ minWidth: "320px", height: "660px" }}
    ></div>
  );
}
