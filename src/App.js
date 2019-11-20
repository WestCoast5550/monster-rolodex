import React, {useState, useEffect} from "react";
import {CardList} from "./components/СardList/cardList";
import {SearchBox} from "./components/SearchBox/SearchBox";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setMonsters(users));
  });
  const filteredMonsters = monsters.filter(({name}) => name.toLowerCase().includes(searchField));
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="search monsters" handleChange={e => setSearchField(e.target.value)} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
