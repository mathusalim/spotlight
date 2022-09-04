import React from "react";

const ProductPresentation = () => {
  return (
    <div style={{ width: "60vw" }}>
      <video controls width="100%">
        <source src="someVidToLoad" type="video/mp4" />
      </video>
    </div>
  );
};

export default ProductPresentation;
