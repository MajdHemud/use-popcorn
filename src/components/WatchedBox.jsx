import { useState } from 'react';
import Button from './Button';
import WatchedSummary from './WatchedSummary';
import WatchedList from './WatchedList';

const tempWatchedData = [
	{
		imdbID: 'tt1375666',
		Title: 'Inception',
		Year: '2010',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
		runtime: 148,
		imdbRating: 8.8,
		userRating: 10
	},
	{
		imdbID: 'tt0088763',
		Title: 'Back to the Future',
		Year: '1985',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
		runtime: 116,
		imdbRating: 8.5,
		userRating: 9
	}
];

export default function WatchedBox() {
	const [watched, setWatched] = useState(tempWatchedData);

	const [isOpenWatchedMoviesList, setIsOpenWatchedMoviesList] =
		useState(true);

	function handleOpenWatchedMoviesList() {
		setIsOpenWatchedMoviesList((open) => !open);
	}

	return (
		<div className='box'>
			<Button
				isClicked={isOpenWatchedMoviesList}
				onClick={handleOpenWatchedMoviesList}
			/>
			{isOpenWatchedMoviesList && (
				<>
					<WatchedSummary watched={watched} />
					<WatchedList watched={watched} />
				</>
			)}
		</div>
	);
}
