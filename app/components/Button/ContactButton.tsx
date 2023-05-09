import React from "react";
import ButtonWrapper from "./ButtonWrapper";

interface ButtonProp {
  buttonColor: string;
  text: string;
  textColor: string;
  linkURL: string;
}

export default function ContactButton({
  buttonColor,
  text,
  textColor,
  linkURL,
}: ButtonProp) {
  return (
    <a href={linkURL}>
      <ButtonWrapper>{text}</ButtonWrapper>
    </a>
  );
}
{
  /* <a href={linkURL} className="no-underline">
      <button className={`btn-primary ${buttonColor} ${textColor}`}>
        <p className="font-bold no-underline">{text}</p>
      </button>
    </a> */
}
