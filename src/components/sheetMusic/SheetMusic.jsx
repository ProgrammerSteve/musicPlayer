import React from "react";
import clairDeLune from "../../assets/pdfs/debussyclairdelune.pdf";

const SheetMusic = () => {
  return (
    <div className="grow bg-gray-800">
      <object
        className="w-[100%] h-[100%]"
        type="application/pdf"
        data={clairDeLune}
      ></object>
    </div>
  );
};

export default SheetMusic;
