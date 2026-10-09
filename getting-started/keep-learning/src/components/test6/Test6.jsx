import "./Test6.css";
import "../instructionsButton.css";
import { useState } from "react";

const Test6 = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [genChat, setGenChat] = useState([]);
  const [chat1, setChat1] = useState("");
  const [chat2, setChat2] = useState("");
  const [user1, setUser1] = useState("User 1");
  const [user2, setUser2] = useState("User 2");
  return (
    <section>
      <h2>Pseudo Instant Messaging Service</h2>
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
          <p>Your task is to build a single-page messaging service!</p>
          <h4>You must complete the following:</h4>
          <ul>
            <li>
              Build a box that contains all the messages and who sent them in
              chronological order,
            </li>
            <li>
              Build 2 separate chat boxes where a user can type a message and
              send it to the general chat box,
            </li>
            <li>
              Make sure to remove any unnecessary whitespace at the start and
              end of a message,
            </li>
            <li>
              If a message is pure whitespace, make sure the message doesn't
              send,
            </li>
            <li>Give people a way to add their own names into the chat</li>
          </ul>
          <hr />
        </section>
      )}
      <section className="IMS">
        <form
          id="chat1Form"
          onSubmit={(event) => {
            event.preventDefault();
            let chat = chat1.trim();
            if (chat.length > 0) {
              setGenChat((genChat) => {
                const newGenChat = [...genChat];
                newGenChat.push(user1 + ": " + chat);
                return newGenChat;
              });
            }
            setChat1("");
          }}
        >
          <input
            type="text"
            value={user1}
            onChange={(event) => setUser1(event.target.value)}
          />
          <br />
          <br />
          <textarea
            id="chat1"
            value={chat1}
            onChange={(event) => setChat1(event.target.value)}
            cols="30"
            rows="20"
          />
          <br />
          <button className="chatSendButton" htmlFor="chat1Form">
            Send
          </button>
          <br />
          <br />
        </form>
        <br />
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setGenChat([]);
          }}
        >
          <label htmlFor="genChat">General Chat:</label>
          <br />
          <br />
          <textarea
            id="genChat"
            value={genChat.join("\n")}
            cols="70"
            rows="20"
          />
          <br />
          <button htmlFor="genChat" className="chatSendButton">
            Clear
          </button>
        </form>
        <form
          id="chat2Form"
          onSubmit={(event) => {
            event.preventDefault();
            let chat = chat2.trim();
            if (chat) {
              setGenChat((genChat) => {
                const newGenChat = [...genChat];
                newGenChat.push(user2 + ": " + chat);
                return newGenChat;
              });
            }
            setChat2("");
          }}
        >
          <input
            type="text"
            value={user2}
            onChange={(event) => setUser2(event.target.value)}
          />
          <br />
          <br />
          <textarea
            id="chat2"
            value={chat2}
            onChange={(event) => setChat2(event.target.value)}
            cols="30"
            rows="20"
          />
          <br />
          <button className="chatSendButton" htmlFor="chat2Form">
            Send
          </button>
        </form>
      </section>
    </section>
  );
};

export default Test6;
