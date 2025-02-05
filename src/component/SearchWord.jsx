import React, { useState } from "react";

export default function Searchword() {
  const DictionaryData = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const [search, setSearchText] = useState("");
  const [defination, setDefination] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    let valuefound = false;

    DictionaryData.forEach((ele) => {
      if (ele.word.toLowerCase() === search.toLowerCase()) {
        setDefination(ele.meaning);
        valuefound = true;
      }
    });

    if (!valuefound) {
      setDefination("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="searchbox"
          value={search}
          onChange={(e) => setSearchText(e.target.value)}

        />
        <button type="submit">Search</button>
      </form>
      <h3>Definition:</h3>
      <p>{defination}</p>
    </div>
  );
}
