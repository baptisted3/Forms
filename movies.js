// Define the Movie class
class Movie {
  // Private properties
  #title;
  #cast;
  #description;
  #rating;

  constructor(title, cast, description, rating) {
    this.#title = title;
    this.#cast = cast;
    this.#description = description;
    this.#rating = rating;
  }

  // Getters so functions outside the class can read values safely
  getTitle() {
    return this.#title;
  }
  
  getCast() {
    return this.#cast;
  }

  getDescription() {
    return this.#description; 
  }

  getRating() {
    return this.#rating;
  }

  // Method to update the rating of the movie
  updateRating(newRating) {
    this.#rating = newRating;
  }

  // Method to display the movie's information
  displayInfo(label = "") {
    const movieInfoDiv = document.getElementById("movie-info");

    movieInfoDiv.innerHTML += `
    <h2>${this.#title}</h2>
    <p><strong>Cast:</strong> ${this.#cast.join(", ")}</p>
    <p><strong>Description:</strong> ${this.#description}</p>
    <p><strong>Rating:</strong> ${this.#rating}</p>
    <hr>
    `;
  }
}

// Create new movie object
const firstMovie = new Movie(
  "Black Panther",
  ["Chadwick Boseman", "Micheal B. Jordan", "Lupita Nyong'o"],
  "A superhero movie about the king of Wakanda.", 
  9
);

// Create a collection array called "movies" and add the movie to the collection
const movies = [];
movies.push(firstMovie);

// Display the initial information of the movie
firstMovie.displayInfo();

// Function to update the rating of a movie in the collection
function updateMovieRating(title, newRating) {
  for (let movie of movies) {
    if (movie.getTitle() === title) {
      movie.updateRating(newRating);
      movie.displayInfo("Updated rating:");
      return;
    }
  }

  document.getElementById("movie-info").innerHTML += `
    <p>Movie with title "${title}" was not found.</p>
  `;
}



