import { useState } from "react";
import "./Test5.css";
import "../instructionsButton.css";

const Test5 = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <section>
      <h2>Build a Drop-Down Menu</h2>
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
          <p>Your task is to build a drop-down menu!</p>
          <h4>You must complete the following:</h4>
          <ul>
            <li>Create a menu bar with at least 5 elements on it,</li>
            <li>
              Have a minimum of 2 of those elements have their own options to
              select,
            </li>
            <li>
              When we hover over an expandable option, we want to display the
              rest of the options,
            </li>
            <li>
              When we move away from the expandable option, it hides the rest of
              its options,
            </li>
            <li>
              Add a hover over effect on each option to show we are interacting
              with that option,
            </li>
          </ul>
          <strong>You must do this using pure CSS</strong>
          <hr />
        </section>
      )}
      <ul id="menu">
        <li class="menu">
          <a href="#">Home</a>
        </li>
        <li class="menu">
          <a href="#">About Us</a>
        </li>
        <li class="menu">
          <a href="#">Tests</a>
          <div class="dropMenu">
            <ul>
              <li>
                <a href="#">Test 1</a>
              </li>
              <li>
                <a href="#">Test 2</a>
              </li>
              <li>
                <a href="#">Test 3</a>
              </li>
              <li>
                <a href="#">Test 4</a>
              </li>
              <li>
                <a href="#">Test 5</a>
              </li>
              <li>
                <a href="#">Test 6</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="menu">
          <a href="#">Careers</a>
          <div class="dropMenu">
            <ul>
              <li>
                <a href="https://northcoders.com/" target="_blank">
                  Northcoders
                </a>
              </li>
              <li>
                <a href="https://www.apple.com/" target="_blank">
                  Apple
                </a>
              </li>
              <li>
                <a href="https://www.google.com" target="_blank">
                  Google
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="menu">
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </section>
  );
};

export default Test5;
