import './App.css'
import {Azure} from "./Azure.tsx";
import {useEffect, useState} from "react";

function App() {
    const [count, setCount] = useState<number>(0);

    const [messageFromApi, setMessageFromApi] = useState<string>('');
    const fetchMessage = async () => {
        const response = await fetch('https://test-api-123456.azurewebsites.net/message');
        const data: string = await response.json();

        setMessageFromApi(data);
    };

    useEffect(() => {
        fetchMessage();
    }, []);

  return (
      <>
          <Azure />

          <h2>{count}</h2>

          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>

          <h3>Message form api: {messageFromApi}</h3>
      </>
  )
}

export default App
