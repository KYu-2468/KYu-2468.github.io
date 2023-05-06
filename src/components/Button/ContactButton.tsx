import React from "react";

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
    <a href={linkURL} className="no-underline">
      <button className={`btn-primary ${buttonColor} ${textColor}`}>
        <p className="font-bold no-underline">{text}</p>
      </button>
    </a>
  );
}
