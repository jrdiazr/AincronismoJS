const fetchData = require("../utils/fetchData");
const URL_API = "https://rickandmortyapi.com/api/character/";

fetchData(URL_API)
	.then(response => {
		console.log("Cantidad de personajes: ", response.info.count);
		return fetchData(URL_API + response.results[0].id);
	})
	.then(response => {
		console.log(response.name);
		return fetchData(response.origin.url);
	})
	.then(response => {
		console.log(response.dimension);
	})
	.catch(err => {
		console.log(err);
	});
