import React from "react";

const BlurCircle = ({
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
}) => {
  return (
    <div
      className="absolute -z-5o h-58 w-58  aspect-square rounded-full bg-primary/30 blur-3xl"
      style={{ top: top, left: left, right: right, bottom: bottom }}
    ></div>
  );
};

export default BlurCircle;
