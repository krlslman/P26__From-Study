import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputValue, setInputValue] = useState("");
  // setInputValue ile inputValue değişkenine değer yazdırırız.

  const handleKeyDown = (e) => {
    // console.log(e.keyCode);
    e.target.value = e.target.value.toUpperCase();
    e.keyCode === 13 && alert("Pressed enter");
  };

  const handleAreaPaste = (e) => {
    e.target.value = e.clipboardData.getData("text").toLowerCase();
    e.target.style.border = "3px solid red";
    e.target.style.backgroundColor = "lime";
    e.preventDefault();
  };

  const handleAreaChange = (e) => {
    if (!e.target.value) {
      e.target.style.border = "1px solid black";
      e.target.style.backgroundColor = "transparent";
    }
  };

//   const handleDisplay = (e) => { // tag içinde süslü ile doğrudan yazılabilir 
//     alert('copied to clipboard!')
//   }

  return (
    <div className="container text-center">
      <h2>CLIPBOARD EVENTS</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <p 
      className="text-start m-4" 
      onCopy={() => alert('copşied to clipboard!')} >
        {inputValue}
      </p>

      <textarea
        name="area"
        id="area"
        cols="50"
        rows="10"
        onPaste={handleAreaPaste}
        onChange={handleAreaChange}
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
