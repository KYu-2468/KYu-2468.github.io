"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function Calendly() {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.async = true;
  //   script.src = "https://assets.calendly.com/assets/external/widget.js";
  //   document.body.appendChild(script);
  // }, []);

  const onClickCalendly = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/kevin-yu-2468/20-min-chat?hide_gdpr_banner=1",
    });
  };

  return (
    // <div
    //   className="calendly-inline-widget"
    //   data-url="https://calendly.com/kevin-yu-2468/20-min-chat"
    //   style={calendlyStyle}
    // ></div>
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <script
        src="https://assets.calendly.com/assets/external/widget.js"
        type="text/javascript"
        async
      ></script>
      <a href="#contact" onClick={onClickCalendly}>
        <button className={`btn-primary bg-green-500 text-white`}>
          <p className="font-bold no-underline">Coffee Chat</p>
        </button>
      </a>
    </>
  );
}
