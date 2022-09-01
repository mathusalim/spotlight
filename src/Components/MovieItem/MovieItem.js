import React from "react";

const MovieItem = () => {
  return (
    <div
      style={{
        ...styles.movieContainerStyles(),
        backgroundColor: "var(--primary)",
      }}
    >
      <p>IMAGE</p>
      <p>TITLE</p>
    </div>
  );
};

const styles = {
  movieContainerStyles: (props) => ({
    width: "20em",
    height: "15rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }),
};

export default MovieItem;
