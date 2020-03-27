const fetchData = require("../utils/fetchData");
const URL_API = "https://rickandmortyapi.com/api/character/";

const asincrono = async () => {
	try {
		const characters = await fetchData(URL_API);
		console.log("Cantidad: ", characters.info.count);
		const character = await fetchData(`${URL_API}${characters.results[0].id}`);
		console.log("Nombre: ", character.name);
		const dimension = await fetchData(`${character.origin.url}`);
		console.log(dimension.dimension);
	} catch (err) {
		console.log(err);
	}
};

asincrono();
