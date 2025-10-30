import { useEffect, useState } from "react";
import api from "../../services/api";
import { Background, Container, Info, Poster } from "./styles";
import Button from "../../components/Buttons";

const Home = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const getMovies = async () => {
			const {
				data: { results },
			} = await api.get("/movie/popular");

			setMovies(results[1]);
		};

		getMovies();
	}, []);

	return (
		<>
			{movies && (
				<Background
					img={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
				>
					<Container>
						<Info>
							<h2>{movies.title}</h2>
							<p>{movies.overview}</p>
							<div>
								<Button red={true}>Assista agora</Button>
								<Button red={false}>Assista o trailer</Button>
							</div>
						</Info>
						<Poster>
							<img
								src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
								alt="capa-do-filme"
							/>
						</Poster>
					</Container>
				</Background>
			)}
		</>
	);
};

export default Home;
