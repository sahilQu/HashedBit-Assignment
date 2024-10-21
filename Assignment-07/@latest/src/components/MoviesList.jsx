import React from "react";
import { Link } from "react-router-dom";
import "./MoviesList.css";

const movies = [
  {
    id: 1,
    title: "Avatar",
    imageUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg",
  },
  {
    id: 2,
    title: "Tumbbad",
    imageUrl:
      "https://img.mensxp.com/media/content/2024/Sep/Image-2_66e2db75e9d86.jpeg?w=900&h=1285&cc=1",
  },
  {
    id: 3,
    title: "Shutter Island",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyytYTyPMvfjimCFvUyKgmnOp3_ed5MQUMsw&s",
  },
  {
    id: 4,
    title: "Welcome Home",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMzI4OWRkZTUtZDU3Zi00ZDYyLTk3ZGUtYjUyZmQ3YjQ1NTRkXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 5,
    title: "Boon",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8wwrgRMRPdH_b7HOLEGN-TX9wSbLyTo5eGw&s",
  },
  {
    id: 7,
    title: "Ajji",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJ8qPEvsG5G5Q-iSwEJcNZj1Nd2XhvgjTlgMzImPn0pM_b78kpYI_hVAMAPgXmEtfwbpziVFs7Vpmnq_5NUQM9hKZrGgqBVsZ0aGJR5g",
  },

];

const MoviesList = () => {
  return (
    <>
      <h2>Movies Booking Sites</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.imageUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoviesList;
