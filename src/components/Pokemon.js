import React from "react";

const Pokemon = ({ data }) => {
  const { name, sprites, types, weight, height } = data;

  return (
    <div>
      <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
      <img
        src={sprites.front_default}
        alt={name}
        style={{ width: "150px", height: "150px" }}
      />
      <p>
        <strong>Typ(er):</strong>{" "}
        {types.map((type) => type.type.name).join(", ")}
      </p>
      <p>
        <strong>Vikt:</strong> {weight} hg
      </p>
      <p>
        <strong>Längd:</strong> {height} dm
      </p>
    </div>
  );
};

export default Pokemon;
