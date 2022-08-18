import React from "react";
import Image from "next/image";

const Topcard = ({mainUrl}) => {
  return (
    <div>
      <div>
        <Image
          src={mainUrl}
          width="1500"
          height="500"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Topcard;
