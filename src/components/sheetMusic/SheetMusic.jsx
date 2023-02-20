import React from "react";
import clairDeLune from "../../assets/pdfs/debussyclairdelune.pdf";

const SheetMusic = () => {
  return (
    <div>
      <object
        height="1000px"
        width="500px"
        type="application/pdf"
        data={clairDeLune}
      ></object>
    </div>
  );
};

export default SheetMusic;
