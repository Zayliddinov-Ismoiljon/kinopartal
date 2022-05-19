import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LittleCard from '../../Component/LittleCard/LittleCard';
import './singlemovie.css';

const SingleMovie = () => {
	const params = useParams();

	const [movie, setMovie] = useState({
		isFetched: false,
		data: {},
		error: null,
	});

	const [video, setVideo] = useState({
		isFetched: false,
		data: {},
		error: null,
	});

	const [person, setPerson] = useState({
		isFetched: false,
		data: {},
		error: null,
	});

	const [recMovie, setRecMovie] = useState({
		isFetched: false,
		data: {},
		error: null,
	});

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_MOVIE_API + '/movie/' + params.id, {
				params: {
					api_key: process.env.REACT_APP_MOVIE_API_KEY,
				},
			})
			.then(function (response) {
				setMovie({
					isFetched: true,
					data: response.data,
					error: false,
				});
			})
			.catch(function (error) {
				setMovie({
					isFetched: true,
					data: {},
					error: false,
				});
			});

		axios
			.get(
				process.env.REACT_APP_MOVIE_API + '/movie/' + params.id + '/videos',
				{
					params: {
						api_key: process.env.REACT_APP_MOVIE_API_KEY,
					},
				},
			)
			.then(function (response) {
				// console.log(response);
				setVideo({
					isFetched: true,
					data: response.data,
					error: false,
				});
			})
			.catch(function (error) {
				// console.log(error);
				setVideo({
					isFetched: true,
					data: {},
					error: false,
				});
			});

		axios
			.get(
				process.env.REACT_APP_MOVIE_API +
					'/movie/' +
					params.id +
					'/recommendations',
				{
					params: {
						api_key: process.env.REACT_APP_MOVIE_API_KEY,
					},
				},
			)
			.then(function (response) {
				console.log(response);
				setRecMovie({
					isFetched: true,
					data: response.data,
					error: false,
				});
			})
			.catch(function (error) {
				// console.log(error);
				setRecMovie({
					isFetched: true,
					data: {},
					error: false,
				});
			});

		axios
			.get(
				process.env.REACT_APP_MOVIE_API + '/movie/' + params.id + '/credits',
				{
					params: {
						api_key: process.env.REACT_APP_MOVIE_API_KEY,
					},
				},
			)
			.then(function (response) {
				console.log(response);
				setPerson({
					isFetched: true,
					data: response.data,
					error: false,
				});
			})
			.catch(function (error) {
				// console.log(error);
				setPerson({
					isFetched: true,
					data: {},
					error: false,
				});
			});
	}, [params.id]);

	return (
		<>
			{movie.isFetched ? (
				<div
					className='single'
					style={{
						backgroundImage: `url(${
							process.env.REACT_APP_MOVIE_IMG_URL + movie.data.backdrop_path
						})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						marginTop: '50px',
					}}>
					<div className='single__actors'>
						<h2>Actors</h2>
						{person.isFetched &&
							person.data.cast.map((item) => (
								<LittleCard
									key={item.id}
									id={item.id}
									img={item.profile_path}
									title={item.name}
									path='person'
								/>
							))}
					</div>
					<div className='single__info'>
						{
							<>
								<h1 className='single__heading'>{movie.data.title}</h1>
								<p className='single__text'>{movie.data.overview}</p>
								{movie.data.genres.map((item) => (
									<button className='btn' key={item.id}>{item.name}</button>
								))}
								{video.data.results.splice(0, 1).map((item) => (
									<div key={item.id}>
										<iframe
											width='560'
											height='315'
											src={`https://www.youtube.com/embed/${item.key}`}
											title={item.name}
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen></iframe>
									</div>
								))}
							</>
						}
					</div>
					<div className='single__recomendations'>
						<h2>Recomendation movies</h2>
						{recMovie.isFetched &&
							recMovie.data.results.map((item) => (
								<LittleCard
									key={item.id}
									id={item.id}
									img={item.poster_path}
									title={item.title}
									path='movie'
								/>
							))}
					</div>
				</div>
			) : (
				<h1 style={{ color: 'black' }}>Loading</h1>
			)}
		</>
	);
};

export default SingleMovie;
