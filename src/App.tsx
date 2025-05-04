import './App.css'
import {Azure} from "./Azure.tsx";
import {useState} from "react";

function App() {
    const [count, setCount] = useState<number>(0);

  return (
      <>
          <Azure />

          <h2>{count}</h2>

          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
      </>
  )
}

export default App
