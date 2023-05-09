"use client";
import React from "react";
import ButtonWrapper from "./Button/ButtonWrapper";

export default function Calendly() {
  const onClickCalendly = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/kevin-yu-2468/20-min-chat?hide_gdpr_banner=1",
    });
  };

  return (
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
        <ButtonWrapper>Coffee Chat</ButtonWrapper>
      </a>
    </>
  );
}
