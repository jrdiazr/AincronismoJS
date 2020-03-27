const XMLHTTPREQUEST = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (url_api, callback) => {
	const xhttp = new XMLHTTPREQUEST();
	xhttp.open("GET", url_api, true);
	xhttp.onreadystatechange = function(event) {
		if (xhttp.readyState === 4) {
			if (xhttp.status === 200) {
				callback(null, JSON.parse(xhttp.responseText));
			} else {
				const error = new Error("Error" + url_api);
				return callback(error, null);
			}
		}
	};
	xhttp.send();
};

fetchData("https://rickandmortyapi.com/api/character/", function(err, res) {
	if (err) {
		console.log(err.message);
	} else {
		console.log("Cantidad de personajes: ", res.results.length);
		fetchData(
			"https://rickandmortyapi.com/api/character/" + res.results[0].id,
			function(err, resPersonaje) {
				console.log("Nombre Personaje: ", resPersonaje.name);
				fetchData(resPersonaje.origin.url, function(err, charInfo) {
					if (err) {
						console.log(err.message);
					} else {
						console.log(charInfo.dimension);
					}
				});
			}
		);
	}
});
