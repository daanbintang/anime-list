import React from "react";

const P = ({title, content}) => {
  return (
    <>
      <p className="italic p-4 bg-accent rounded-xl font-light text-sm mt-4">
        <span className="font-bold text-md mr-2 text-primary px-4 text-md py-1 rounded-md underline">
          {title}
        </span>
        {content}
      </p>
    </>
  );
};

export default P;
