import React, { useEffect, useState } from "react";
import "./app.css";

export default function App() {
  const [InputValue, setInputValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [word, setWord] = useState("");
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    // Qr Code Api
    setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${word}`);
  }, [word]);

  // On click, if input value is not empty, setIsActive(true) and setWord(InputValue)
  let handleClick = () => {
    if (InputValue !== "") {
      setIsActive(true);
      setWord(InputValue);
    }
  };

  return (
    <div className="container" style={{ height: isActive ? "450px" : "" }}>
      <h3 className="title">
        <i className="fa-solid fa-qrcode"></i> Qr Code Generator | Talo
      </h3>
      <div className="qr-code-box" style={{ visibility: isActive ? "visible" : "" }}>
        <div className="qr-code">
          <img src={qrCode} alt="" />
        </div>
      </div>
      <input
        type="text"
        className="userInput"
        placeholder="Enter text or URL"
        onChange={(e) => setInputValue(e.target.value)}
        style={{ top: isActive ? "88px" : "" }}
      />
      <button className="generate-btn" onClick={handleClick}>
        Generate
      </button>
    </div>
  );
}
