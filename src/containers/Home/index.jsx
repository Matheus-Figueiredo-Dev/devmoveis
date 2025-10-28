import { useEffect, useState } from "react";
import api from "../../services/api";
import { Background } from "./styles";

const Home = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const getMovies = async () => {
			const { data: { results } } = await api.get("/movie/popular");

			setMovies(results[0]);
		};

		getMovies();
	}, []);

	return (
		<>
			{movies && (
				<Background img={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}>
					<h2>{movies.title}</h2>
					<p>{movies.overview}</p>
				</Background>
			)}
		</>
	);
};

export default Home;
