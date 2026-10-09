import { useState } from "react";
import "./Test2.css";
import "../instructionsButton.css";
const movieData = require("../../movies.json");

const Test1 = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [listQuery, setListQuery] = useState("");

  return (
    <section>
      <h2>Movie List Filter:</h2>
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
            Your task is to build a similar movie search bar as below. We have
            given the data for you in a movies.json file.
          </p>
          <h4>You must complete the following:</h4>
          <ul>
            <li>
              A results table displaying the title, director, genre, cast and
              average rating of each movie,
            </li>
            <li>
              A search bar that will only display movies that match the current
              search,
            </li>
            <li>
              The search bar must be able to search for any movie title,
              director, genre or cast member,
            </li>
          </ul>
          <h4>Challenge:</h4>
          <p>
            Can you create a 500 millisecond delay before updating the list once
            the user has stopped typing?
          </p>
          <hr />
        </section>
      )}
      <form>
        <label for="listQuery">Query Movies: </label>
        <br />
        <br />
        <input
          id="listQuery"
          value={listQuery}
          onChange={(event) => setListQuery(event.target.value)}
          placeholder="Search by Title, Director, Genre, or Actor/Actress"
        />
        <br />
      </form>
      <br />
      <br />
      <table>
        <tr>
          <th>Title</th>
          <th>Director</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Cast</th>
          <th>Average Rating</th>
        </tr>
        {movieData.map((movie) => {
          const titleQuery = movie.title
            .toLowerCase()
            .includes(listQuery.toLowerCase());
          const directorQuery = movie.director
            .toLowerCase()
            .includes(listQuery.toLowerCase());
          const genreQuery = movie.genre
            .toLowerCase()
            .includes(listQuery.toLowerCase());
          const castQuery = movie.cast.some((actor) =>
            actor.toLowerCase().includes(listQuery.toLowerCase())
          );
          const ratings = Object.values(movie.ratings).flat();
          ratings[0] *= 10;
          const averageRating = (
            ratings.reduce((sum, num) => sum + num, 0) / ratings.length
          ).toFixed(2);
          if (titleQuery || directorQuery || genreQuery || castQuery) {
            return (
              <tr>
                <td>{movie.title}</td>
                <td>{movie.director}</td>
                <td>{movie.year}</td>
                <td>{movie.genre}</td>
                <td>{movie.cast.join(", ")}</td>
                <td>{averageRating}</td>
              </tr>
            );
          }
        })}
      </table>
    </section>
  );
};

export default Test1;
