import { useEffect, useState } from 'react';
import MovieCard from '../../Component/MovieCard/MovieCard';

const Popular = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		fetch(
			`${process.env.REACT_APP_MOVIE_API}/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`, 
		)
			.then((response) => response.json())
			.then((data) => setMovie(data));
	}, []);

	// console.log(movie.results);

	return (
		<>
			<div style={{ display: 'flex', flexWrap: 'wrap', width: "1440px",
    margin: "0 auto", justifyContent: "space-between", marginTop:"30px" }}>
				{movie.results && movie.results.map((item) => <MovieCard obj={item} />)}
			</div>
		</>
	);
};

export default Popular;
