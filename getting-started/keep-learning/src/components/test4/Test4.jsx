import { useEffect, useState } from "react";
import "./Test4.css";
import "../instructionsButton.css";

const Test4 = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [newGame, setNewGame] = useState([]);
  const [found, setFound] = useState(0);
  const [score, setScore] = useState("");
  useEffect(() => {
    let xCoord = Math.floor(Math.random() * 18);
    let yCoord = Math.floor(Math.random() * 7);
    let game = new Array(7);
    game.fill([]);
    game = game.map((set) => {
      const arr = new Array(18);
      arr.fill(null);
      return arr;
    });
    game[yCoord][xCoord] = "x";
    setNewGame(game);
    if (found === 1) {
      setScore("You've found the X 1 time!");
    } else {
      setScore(`You've found the X ${found} times!`);
    }
  }, [found]);

  return (
    <section>
      <h2>Find the X Game:</h2>
      <button
        className="instructionsButton"
        onClick={() => setShowInstructions((bool) => !bool)}
      >
        Show/Hide Instructions
      </button>
      <br />
      <br />
      {showInstructions && (
        <section>
          <hr />
          <h3>Instructions:</h3>
          <p>
            Your task is to build a mini game where a player must find an X in
            the box to increase their score counter.
          </p>
          <h4>You must complete the following:</h4>
          <ul>
            <li>
              Build a box that has only 1 X inside of it that is hidden from
              view,
            </li>
            <li>When our mouse is over the X, reveal it to the player,</li>
            <li>
              The X should be clickable, and when clicked should increase the
              counter by 1 and hide the X again
            </li>
          </ul>
          <h4>Challenge:</h4>
          <p>
            Add a score card that tells the player the fastest time that they've
            found the X this game
          </p>
          <hr />
        </section>
      )}

      <strong>{score}</strong>
      <br />
      <br />
      <table className="gameTable">
        {newGame.map((row) => {
          return (
            <tr>
              {row.map((tile) => {
                if (tile === "x") {
                  return (
                    <td>
                      <button
                        className="X"
                        onClick={() => setFound((num) => num + 1)}
                      >
                        X
                      </button>
                    </td>
                  );
                }
                return <td>{tile}</td>;
              })}
            </tr>
          );
        })}
      </table>
    </section>
  );
};

export default Test4;
