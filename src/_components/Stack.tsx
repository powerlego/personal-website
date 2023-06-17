import React from "react";

type StackProps = {
  direction?: "row" | "col";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "normal" | "start" | "center" | "end" | "between" | "around" | "evenly" | "stretch";
  flex?: "none" | "auto" | "1" | "initial";
  reverse?: boolean;
  gap?:
    | "0"
    | "x-0"
    | "y-0"
    | "px"
    | "x-px"
    | "y-px"
    | "0.5"
    | "x-0.5"
    | "y-0.5"
    | "1"
    | "x-1"
    | "y-1"
    | "1.5"
    | "x-1.5"
    | "y-1.5"
    | "2"
    | "x-2"
    | "y-2"
    | "2.5"
    | "x-2.5"
    | "y-2.5"
    | "3"
    | "x-3"
    | "y-3"
    | "3.5"
    | "x-3.5"
    | "y-3.5"
    | "4"
    | "x-4"
    | "y-4"
    | "5"
    | "x-5"
    | "y-5"
    | "6"
    | "x-6"
    | "y-6"
    | "7"
    | "x-7"
    | "y-7"
    | "8"
    | "x-8"
    | "y-8"
    | "9"
    | "x-9"
    | "y-9"
    | "10"
    | "x-10"
    | "y-10"
    | "11"
    | "x-11"
    | "y-11"
    | "12"
    | "x-12"
    | "y-12"
    | "14"
    | "x-14"
    | "y-14"
    | "16"
    | "x-16"
    | "y-16"
    | "20"
    | "x-20"
    | "y-20"
    | "24"
    | "x-24"
    | "y-24"
    | "28"
    | "x-28"
    | "y-28"
    | "32"
    | "x-32"
    | "y-32"
    | "36"
    | "x-36"
    | "y-36"
    | "40"
    | "x-40"
    | "y-40"
    | "44"
    | "x-44"
    | "y-44"
    | "48"
    | "x-48"
    | "y-48"
    | "52"
    | "x-52"
    | "y-52"
    | "56"
    | "x-56"
    | "y-56"
    | "60"
    | "x-60"
    | "y-60"
    | "64"
    | "x-64"
    | "y-64"
    | "72"
    | "x-72"
    | "y-72"
    | "80"
    | "x-80"
    | "y-80"
    | "96"
    | "x-96"
    | "y-96";
  padding?:
    | "0"
    | "0.5"
    | "1"
    | "1.5"
    | "2"
    | "2.5"
    | "3"
    | "3.5"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "14"
    | "16"
    | "20"
    | "24"
    | "28"
    | "32"
    | "36"
    | "40"
    | "44"
    | "48"
    | "52"
    | "56"
    | "60"
    | "64"
    | "72"
    | "80"
    | "96";
  children: React.ReactNode;
  className?: string;
};

export default function Stack({
  direction = "row",
  align = "center",
  justify = "normal",
  flex,
  reverse = false,
  gap = "0",
  padding = "0",
  children,
  className,
}: StackProps) {
  return (
    <div
      className={`flex flex-${direction}${reverse ? "-reverse" : ""} items-${align} justify-${justify} ${
        flex ? `flex-${flex}` : ""
      } gap-${gap} p-${padding} ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
