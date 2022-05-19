import { Link } from 'react-router-dom';
import './littlecard.css';

const LittleCard = ({ id, title, img }) => {
	return (
		<Link className='link' to={`/movie/${id}`}>
			<div className='little-card'>
				<img className='little-card__img' src={process.env.REACT_APP_MOVIE_IMG_URL + img} alt={title} />
				<h3>{title}</h3>
			</div>
		</Link>
	);
};

export default LittleCard;
