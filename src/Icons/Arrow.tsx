import { SVGProps, memo } from "react";

export const Arrow = memo((props: Readonly<SVGProps<SVGSVGElement>>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m11.475 18.025l-8.15-5.175q-.475-.3-.475-.85t.475-.85l8.15-5.175q.5-.325 1.013-.037t.512.887V11h8q.425 0 .713.288T22 12q0 .425-.288.713T21 13h-8v4.175q0 .6-.513.888t-1.012-.038M11 15.35v-6.7L5.725 12zM11 12"
      ></path>
    </svg>
  );
});
