import React from "react";
import ButtonWrapper from "./ButtonWrapper";

interface ButtonProp {
  buttonColor: string;
  text: string;
  textColor: string;
  linkURL: string;
}

export default function ProjectButtonn({
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
