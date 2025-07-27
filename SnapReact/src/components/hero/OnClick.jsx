import React from "react";
import { useState } from "react";

const OnClick = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}></button>
    </div>
  );
};

export default OnClick;
