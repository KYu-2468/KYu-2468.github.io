import React from "react";

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
    <a href={linkURL} className="no-underline">
      <button className={`btn-primary ${buttonColor} ${textColor} w-40 h-12`}>
        <p className="font-bold no-underline">{text}</p>
      </button>
    </a>
  );
}
