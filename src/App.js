import './App.css';
import Person from "./card/Card";
import Select from 'react-select';
import { useEffect, useState } from "react";

function App() {

  const [dataFetched, setDataFetched] = useState([]);
  const [currywurst, setCurrywurst] = useState([]);


  console.log(currywurst);

  const statusOptions = [
    { value: 'unknown', label: 'unknown' },
    { value: 'Alive', label: 'Alive' },
    { value: 'Dead', label: 'Dead' }
  ]

  useEffect(()=>{
    loadFetchedData()
  },[])

  async function loadFetchedData() {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setDataFetched(data.results);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className="App">
      <Select 
            placeholder= "Select a Status"
            options={statusOptions}
            setCurrywurst={entry=>{entry.map(o=>{return o.value})}}></Select>

          {dataFetched.filter(brokkoly=>{return brokkoly.status===currywurst}).map((person_data)=>{
        return <Person key={person_data.id} name={person_data.name} src={person_data.image}
        status={person_data.status}/>
      })}

    </div>
  );
}

export default App;
