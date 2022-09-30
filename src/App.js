import "./App.css";
import Card from "./card/Card";
import Select from "react-select";
import { useEffect, useState } from "react";

function App() {
  const statusOptions = [
    { value: "unknown", label: "unknown" },
    { value: "Alive", label: "Alive" },
    { value: "Dead", label: "Dead" },
  ];

  const [dataFetched, setDataFetched] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    loadFetchedData();

    async function loadFetchedData() {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?status=${status}`
        );
        const data = await response.json();
        setDataFetched(data.results);
      } catch (error) {
        console.log(error);
      }
    }
  }, [status]);

  return (
    <div className="App">
      <Select
        placeholder="Select a Status"
        options={statusOptions}
        onChange={(event) => setStatus(event.value)}
      ></Select>

      {dataFetched.map((character) => (
        <Card
          name={character.name}
          src={character.image}
          status={character.status}
          key={character.id}
        />
      ))}
    </div>
  );
}

export default App;
