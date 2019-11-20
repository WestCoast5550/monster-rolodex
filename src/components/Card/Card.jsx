import React from "react";
import "./styles.scss";

export const Card = ({monster: {id, name, email}}) => (
  <div className="card-container">
    <img alt="monster" src={`https://robohash.org/${id}?set=set2&size=180x180`} />
    <h2 key={id}>{name}</h2>
    <p>{email}</p>
  </div>
);
