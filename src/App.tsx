import './App.css'
import {Azure} from "./Azure.tsx";
import {useState} from "react";

function App() {
    const [count, setCount] = useState<number>(0);

  return (
      <>
          <Azure />
          <button onClick={() => setCount(count + 1)}/>
          <button onClick={() => setCount(count - 1)}/>
      </>
  )
}

export default App
