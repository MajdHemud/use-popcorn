import { useState } from 'react';
import Button from './Button';

export default function ListBox({ children }) {
	const [isOpenMoviesList, setIsOpenMoviesList] = useState(true);

	function handleOpenMovieList() {
		setIsOpenMoviesList((open) => !open);
	}

	return (
		<div className='box'>
			<Button
				isClicked={isOpenMoviesList}
				onClick={handleOpenMovieList}
			/>
			{isOpenMoviesList && children}
		</div>
	);
}
