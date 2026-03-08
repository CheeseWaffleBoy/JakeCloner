import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [extraClick, setExtraClick] = useState(0);
  const [perSecond, setPerSecond] = useState(0);
  const [bought, setBought] = useState(false);
  const [bought1, setBought1] = useState(false);
  const [rebirthBoost, setRebirthBoost] = useState(1);
  const [autosBought, setAutosBought] = useState(0)

  const names = ["Jake", "Aiden", "Remy", "Nathan", "Zane", "Clinton","Connor"];
  const [currentName, setCurrentName] = useState("Jake");

  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    x: 0,
    y: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + (perSecond * rebirthBoost));
    }, 1000);

    return () => clearInterval(interval);
  }, [perSecond, rebirthBoost]);

  function handleClick() {
    setCount(c => c + (1 + extraClick) * (autosBought / 10) * rebirthBoost);
  }

  function Button({ handleClick }) {
    return (
      <button
        style={{
          width: "175px",
          height: "50px"
        }}
        onClick={handleClick}
      >
        Clone {currentName}
      </button>
    );
  }

  function Sacrifice50() {
    return (
      <button
        disabled={count < 10}
        onMouseEnter={(e) => {
          const rect = e.target.getBoundingClientRect();
          setTooltip({
            visible: true,
            text: `Cost: 10 ${currentName}s | Gain: +0.1 ${currentName}s per second`,
            x: rect.left + rect.width / 2,
            y: rect.bottom
          });
        }}
        onMouseLeave={() =>
          setTooltip(prev => ({ ...prev, visible: false }))
        }
        onClick={() => {
          setCount(c => c - 10);
          setPerSecond(p => p + 0.1);
          setAutosBought(b => b + 1)
          
        }}
        style={{
          width: "175px",
          height: "50px",
          cursor: count < 10 ? "not-allowed" : "pointer"
        }}
      >
        Buy an auto cloner
      </button>
    );
  }

  function Sacrifice100() {
    return (
      <button
        disabled={count < 100}
        onMouseEnter={(e) => {
          const rect = e.target.getBoundingClientRect();
          setTooltip({
            visible: true,
            text: `Cost: 100 ${currentName}s | Gain: +1 ${currentName} per second`,
            x: rect.left + rect.width / 2,
            y: rect.bottom
          });
        }}
        onMouseLeave={() =>
          setTooltip(prev => ({ ...prev, visible: false }))
        }
        onClick={() => {
          setCount(c => c - 100);
          if (bought1) {
          setPerSecond(p => p + 2);
          } else {
           setPerSecond(p => p + 1); 
          }
          
        }}
        style={{
          width: "175px",
          height: "50px",
          cursor: count < 100 ? "not-allowed" : "pointer"
        }}
      >
        Upgrade auto cloners
      </button>
    );
  }

  function DbClick() {
    if (bought) return null;

    return (
      <button
        disabled={count < 100}
        onMouseEnter={(e) => {
          const rect = e.target.getBoundingClientRect();
          setTooltip({
            visible: true,
            text: `Cost: 100 ${currentName}s | Permanent *2 ${currentName} per click`,
            x: rect.left + rect.width / 2,
            y: rect.bottom
          });
        }}
        onMouseLeave={() =>
          setTooltip(prev => ({ ...prev, visible: false }))
        }
        onClick={() => {
          setCount(c => c - 100);
          setExtraClick(e => e + 1);
          setBought(true);
        }}
        style={{
          width: "175px",
          height: "50px",
          cursor: count < 100 ? "not-allowed" : "pointer"
        }}
      >
        Raid a library
      </button>
    );
  }

  function DbClick1() {
    if (bought1) return null;

    return (
      <button
        disabled={count < 500}
        onMouseEnter={(e) => {
          const rect = e.target.getBoundingClientRect();
          setTooltip({
            visible: true,
            text: `Cost: 500 ${currentName}s | Permanent *2 ${currentName} per second`,
            x: rect.left + rect.width / 2,
            y: rect.bottom
          });
        }}
        onMouseLeave={() =>
          setTooltip(prev => ({ ...prev, visible: false }))
        }
        onClick={() => {
          setCount(c => c - 500);
          setPerSecond(p => p * 2);
          setBought1(true);
        }}
        style={{
          width: "175px",
          height: "50px",
          cursor: count < 500 ? "not-allowed" : "pointer"
        }}
      >
        Raid a research center
      </button>
    );
  }

  function Rebirth() {
    return (
      <button
        style={{
          width: "175px",
          height: "50px"
        }}
        onClick={() => {
          const randomIndex = Math.floor(Math.random() * names.length);
          setCurrentName(names[randomIndex]);

          setRebirthBoost(r => r + count / 5000);
          setCount(0);
          setExtraClick(0);
          setPerSecond(0);
          setBought(false);
          setBought1(false);
        }}
      >
        Rebirth
      </button>
    );
  }

  function Resetbutton() {
    return (
      <button
        style={{
          width: "175px",
          height: "50px"
        }}
        onClick={() => {
          setCount(0);
          setExtraClick(0);
          setPerSecond(0);
          setBought(false);
          setBought1(false);
          setRebirthBoost(1);
          setAutosBought(0)
        }}
      >
        Reset
      </button>
    );
  }

  return (
    <>
      <h1
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        {currentName} Clones: {count.toFixed(1)}
      </h1>

      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <Button handleClick={handleClick} />
      </div>

      <div style={{ position: "absolute", top: "15%", left: "90%", transform: "translate(-50%, -50%)" }}>
        <Sacrifice100 />
      </div>

      <div style={{ position: "absolute", top: "5%", left: "10%", transform: "translate(-50%, -50%)" }}>
        <DbClick />
      </div>

      <div style={{ position: "absolute", top: "5%", left: "90%", transform: "translate(-50%, -50%)" }}>
        <Sacrifice50 />
      </div>

      <div style={{ position: "absolute", top: "75%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Resetbutton />
      </div>

      <div style={{ position: "absolute", top: "15%", left: "10%", transform: "translate(-50%, -50%)" }}>
        <DbClick1 />
      </div>

      <h1 style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)" }}>
        {currentName}s per click: {(extraClick + 1).toFixed(1)} ({((extraClick + 1) * rebirthBoost).toFixed(2)})
      </h1>

      <h1 style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)" }}>
        {currentName}s per second: {(perSecond).toFixed(1)} ({(perSecond * rebirthBoost).toFixed(2)})
      </h1>

      <div style={{ position: "absolute", top: "65%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Rebirth />
      </div>

      <h1 style={{ position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)" }}>
        Rebirth boost: {(rebirthBoost).toFixed(2)}
      </h1>

      {tooltip.visible && (
        <div
          style={{
            position: "fixed",
            left: tooltip.x,
            top: tooltip.y - 10,
            transform: "translate(-50%, -100%)",
            backgroundColor: "black",
            color: "white",
            padding: "8px 12px",
            borderRadius: "8px",
            fontSize: "14px",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            zIndex: 100000,
            boxShadow: "0 4px 10px rgba(0,0,0,0.4)"
          }}
        >
          {tooltip.text}
        </div>
      )}
    </>
  );
}