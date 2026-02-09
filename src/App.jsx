import {uuid} from 'uuidv4';

export default function App() {

  const newId = uuid();
  const id= newId

  return (
    <div className="App">
      <h1>React App</h1>
      <p>Assigned UUID: {id}</p>
    </div>
  );
}