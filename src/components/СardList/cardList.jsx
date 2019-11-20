import React from "react";
import "./cardList.css";
import {Card} from "../Card/Card";

export const CardList = ({monsters}) => (
  <div className="card-list">
    {monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
