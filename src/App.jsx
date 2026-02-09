import { v4 as uuidv4 } from 'uuid';

export default function App() {

  const randomId = uuidv4();

  return (
    <div className="App">
      <h1>React App</h1>
      <p>Assigned Random Number: {randomId}</p>

      <button style={{color: 'green'}}>Click me</button>
    </div>
  );
}