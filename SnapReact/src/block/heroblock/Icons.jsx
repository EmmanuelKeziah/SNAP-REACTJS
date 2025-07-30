import React from "react";
import databiz from "../../assets/Images/databiz.svg";
import audiophile from "../../assets/Images/audiophile.svg";
import meet from "../../assets/Images/meet.svg";
import maker from "../../assets/Images/maker.svg";

const Icons = () => {
  return (
    <div className="flex gap-4">
      <img src={databiz} alt="databiz-icon" />
      <img src={audiophile} alt="audiophile-icon" />
      <img src={meet} alt="meet-icon" />
      <img src={maker} alt="maker-icon" />
    </div>
  );
};

export default Icons;
