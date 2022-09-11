import React, { useState } from 'react'
import Overview from './Overview'

const MovieCard = ({ movie, addMovie, removeMovie, list }) => {
	const [shown, setShown] = useState(false)

	const inWatchlist = list.filter(mov => {
		return mov.id === movie.id
	})

	const button =
		inWatchlist.length === 0 ? (
			<button onClick={() => addMovie(movie)}>Add to List</button>
		) : (
			<button onClick={() => removeMovie(movie)}>Remove</button>
		)

	const overview = <p>{movie.overview}</p>

	return (
		<div className="movie-card">
			<div>
				<img
					src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
				/>
				<h1>{movie.title}</h1>
				<h5>Released: {movie.release_date}</h5>
			</div>
			<div className="button-container">
				<button onClick={() => setShown(!shown)}>Show Overview</button>
				{shown ? <Overview overviewText={movie.overview} /> : ''}
				{button}
			</div>
		</div>
	)
}

export default MovieCard
