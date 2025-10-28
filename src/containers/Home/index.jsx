import api from "../../services/api";
import { Background } from "./styles";

const Home = () => {
	const getMovies = async () => {
		const data = await api.get("/movie/popular");
		console.log(data);
	};

	getMovies();

	return (
		<Background img='https://image.tmdb.org/t/p/original/tPq8xqhsTYZzUGwMKuksa0eyeGZ.jpg'>
			<h2>DevMovies</h2>
		</Background>
	);
};

export default Home;
