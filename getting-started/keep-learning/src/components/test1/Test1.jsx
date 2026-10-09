import { useContext, useState } from "react";
import "./Test1.css";
import "../instructionsButton.css";

const Test2 = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <section>
      <h2>Create a Log In Page:</h2>
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
            Your task is to build a login form where a user can input their
            email and password to enter a website, or where they can sign up for
            a new account.
          </p>
          <h4>You must complete the following:</h4>
          <ul>
            <li>Create a login form where a user can put in their details,</li>
            <li>
              Create a sign-up form where a new user can create an account,
              using their name, email and password,
            </li>
            <li>
              Hide the sign up info unless they click a button where they can
              sign up
            </li>
          </ul>
          <h4>Challenge:</h4>
          <p>
            Add in input validation to ensure that their email is of the correct
            format and their password contains a number, a lowercase letter and
            an uppercase letter
          </p>
          <hr />
        </section>
      )}
      <form id="loginForm">
        <label for="email">Email:</label>
        <br />
        <input
          id="email"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autocomplete="off"
          required
        />
        <br /> <br />
        <label for="password">Password:</label>
        <br />
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autocomplete="off"
          required
        />
        <br />
        <br />
        <button type="submit" for="loginForm">
          Submit
        </button>
        <br />
        <br />
      </form>
      <button onClick={() => setShowSignUp((signUp) => !signUp)}>
        Sign Up?
      </button>
      <br />
      <br />
      {showSignUp && (
        <section>
          <form id="signUpForm">
            <label for="nameSignUp">Your Name: </label>
            <br />
            <input
              id="nameSignUp"
              type="text"
              value={signUpDetails.name}
              onChange={(event) =>
                setSignUpDetails((details) => {
                  const name = event.target.value;
                  const newDetails = { ...details, name };
                  return newDetails;
                })
              }
              autocomplete="off"
              required
            />
            <br />
            <br />
            <label for="emailSignUp">Your Email:</label>
            <br />
            <input
              id="emailSignUp"
              type="text"
              value={signUpDetails.email}
              onChange={(event) =>
                setSignUpDetails((details) => {
                  const email = event.target.value;
                  const newDetails = { ...details, email };
                  return newDetails;
                })
              }
              autocomplete="off"
              required
            />
            <br />
            <br />
            <label for="passwordSignUp">Password:</label>
            <br />
            <input
              id="passwordSignUp"
              type="password"
              value={signUpDetails.password}
              onChange={(event) =>
                setSignUpDetails((details) => {
                  const password = event.target.value;
                  const newDetails = { ...details, password };
                  return newDetails;
                })
              }
              autocomplete="off"
              required
            />
            <br />
            <br />
            <button type="submit" for="signUpForm">
              Submit
            </button>
          </form>
        </section>
      )}
    </section>
  );
};

export default Test2;
