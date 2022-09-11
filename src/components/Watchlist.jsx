import React from 'react'
import MovieCard from './MovieCard'

const Watchlist = ({ list, removeMovie }) => {
	const movieDisplay = list.map(movie => {
		return <MovieCard movie={movie} removeMovie={removeMovie} list={list} />
	})
	return (
		<div className="watchlist">
			<div className="watchlist-title-wrapper">
				<h1 className="watchlist-title">My Watchlist</h1>
			</div>
			<div className="movie-container">{movieDisplay}</div>
		</div>
	)
}

export default Watchlist
