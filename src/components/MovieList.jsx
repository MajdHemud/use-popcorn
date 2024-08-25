import Movie from './Movie';

export default function MovieList({ movies }) {
	return (
		<ul className='list'>
			{movies?.map((movie) => (
				<Movie key={movie.imdbID} movie={movie}>
					<p>
						<span>🗓</span>
						<span>{movie.Year}</span>
					</p>
				</Movie>
			))}
		</ul>
	);
}
