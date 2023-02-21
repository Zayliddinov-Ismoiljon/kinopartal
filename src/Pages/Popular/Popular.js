import { useEffect, useState } from 'react';
import MovieCard from '../../Component/MovieCard/MovieCard';
import '../Popular/popular.css'

const Popular = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		fetch(
			`${process.env.REACT_APP_MOVIE_API}/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`, 
		)
			.then((response) => response.json())
			.then((data) => setMovie(data));
	}, []);


	return (
		<>
			<div className='popular-body'>
				{movie.results && movie.results.map((item,i) => <MovieCard key={i} obj={item} />)}
			</div>
		</>
	);
};

export default Popular;
