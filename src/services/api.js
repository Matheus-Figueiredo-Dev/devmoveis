import axios from "axios";

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	params: {
		api_key: "fc4498ae4e601c11147d91c1aab4c51c",
		language: "pt-BR",
		page: 1,
	},
});

export default api;
