export default function Button({ isClicked, onClick }) {
	return (
		<button className='btn-toggle' onClick={onClick}>
			{isClicked ? '–' : '+'}
		</button>
	);
}
