import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { FaYinYang } from "react-icons/fa";
import { FaEvernote } from "react-icons/fa";
import './MouseEvent.css' 

const MouseEvent = () => {
  // Mouseover olayı, fare işaretçisi div öğesine ve onun alt öğelerine girdiğinde tetiklenir. Mouseenter olayı, yalnızca fare işaretçisi div öğesine girdiğinde tetiklenir. onmousemove olayı, fare işaretçisi div öğesinin üzerine her taşındığında tetiklenir.

  const [visible, setVisible] = useState(false);
  const [toggleBG, setToggleBG] = useState(false);

  const [coordX, setCoordX] = useState();
  const [coordY, setCoordY] = useState();

  const handleDoubleClick = (e) => {
    setToggleBG(!toggleBG);
    toggleBG
      ? (e.target.className = "bg-danger text-light w-50 p-4 mt-4")
      : (e.target.className = "bg-info text-light w-50 p-4 mt-4");
  };


  const handleMouseMove = (e) => {
    //! Goreceli koordinatlar
    setCoordX(e.nativeEvent.offsetX);
    setCoordY(e.nativeEvent.offsetY);

    //! Sayfaya göre koordinatlar
    // setCoordX(e.pageX);
    // setCoordY(e.pageY);
  };

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 id="headerMouseEvents" className="text-danger mb-4">MOUSE EVENTS</h2>

      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
        onMouseLeave={() => setVisible(false)}
        onMouseEnter={() => setVisible(true)}
      >
        todo item 1 <FaReact /> {visible && <span> When mouse enter into </span>}
        {/* her icon bir component gibi ekleniyor self closing tag ile */}
      </div>

      <div
        id="todo-2"
        className="bg-success text-light w-50 p-4 mt-4"
        onDoubleClick={handleDoubleClick}
      >
        todo item 2 <FaEvernote /> Double click here!
      </div>

      <div 
      id="todo-3" 
      className="bg-secondary text-light w-50 p-4 my-4" 
      onMouseMove={handleMouseMove} >
        todo item 3 <FaYinYang /> <span> Coordinates</span>
      </div>

      <p>X and Y</p>
      <p className="text-danger fw-bold">
        {coordX} {coordY}
      </p>
    </div>
  );
};

export default MouseEvent;
