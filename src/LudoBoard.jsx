import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  let [arr, setArr] = useState([10, 20, 30]);

  function updateBlue() {
    setMoves((prevMoves) => {
      arr.push(40);
      setArr([...arr]);
      console.log(arr);

      console.log("Previous state:", prevMoves); // Logs the current state
      return {
        ...prevMoves,
        blue: prevMoves.blue + 1,
      };
    });
  }

  // function updateArr() {

  //     setArr( (prevArr) => {
  //         console.log(prevArr);

  //         return [
  //             ...prevArr, 40
  //         ]
  //     })
  // }
  function updateRed() {
    moves.red += 1;
    setMoves({ ...moves });
  }
  function updateYellow() {
    moves.yellow += 1;
    setMoves({ ...moves });
  }
  function updateGreen() {
    moves.green += 1;
    setMoves({ ...moves });
  }

  return (
    <div>
      <p>Game Start!</p>
      <div>
        <div>
          <p>Blue moves = {moves.blue}</p>
          <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
            +1
          </button>
        </div>
        <div>
          <p>Yellow moves = {moves.yellow}</p>
          <button
            style={{ backgroundColor: "yellow", color: "black" }}
            onClick={updateYellow}
          >
            +1
          </button>
        </div>

        <p>Green moves = {moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Red moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
