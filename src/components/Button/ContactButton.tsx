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
  //   const linkStyle = { textDecoration: "none" };
  const linkTailwindStyle = "w-68 h-20 no-underline";

  const buttonStyle = [
    "w-56 h-16 transition-all ease-in-out duration-500 hover:scale-110",
    "flex flex-nowrap justify-center items-center",
    `rounded-lg ${buttonColor}`,
    `text-2xl ${textColor}`,
  ].join(" ");
  return (
    <a href={linkURL} className={linkTailwindStyle}>
      <button className={buttonStyle}>
        <p className="no-underline font-bold">{text}</p>
      </button>
    </a>
  );
}
