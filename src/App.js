import { useState } from "react";
import './App.css';
import myImage from "./IMG_4539.jpg";

function Button() {
   const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    const audio = new Audio("../Click.mp3");
  audio.play();
  }


  return (
     <button
      style={{
        width: "504px",
        height: "671px",
        backgroundSize: "cover",
        marginLeft: "0px",
        marginTop: "0px"
      }}
      onClick={handleClick}  >

      <img src={myImage}
       alt="My Image"
       style={{
        width: "500px",
        height: "auto",
        marginLeft: "-6px",
        marginTop: "0px" 
        }}/>
      
    </button>
    

  );
}
function App() {
   return (
    <div>
     <h1 style={{
       position: "absolute",
       top: "50%",
       left: "50%",
       color: "black"
     }}>
       Hello
     </h1>
    </div>
   );
}

export default Button;