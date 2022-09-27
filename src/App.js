import './App.css';
import { persons } from "./assets/persons";
import Person from "./card/Card";

function App() {
  return (
    <div className="App">
          {persons.map((person_data)=>{
        return <Person key={person_data.id} name={person_data.name} src={person_data.image}
        status={person_data.status}/>
      })}
    </div>
  );
}

export default App;
