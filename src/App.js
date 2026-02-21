import { useState } from "react";
import './App.css';

function App() {
   const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
     <button
      style={{
        width: "100px",
        height: "100px",
        backgroundImage: 'url("IMG_4539.jpg")',
        backgroundSize: "cover",
      }}
      onClick={handleClick}
      
    >
      Cloned {count} times
    </button>
  );
}

export default App;
