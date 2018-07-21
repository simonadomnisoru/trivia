const getTrivia = function (callback) {
	return fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
		.then((response) => response.json())
		.then((response) => {
			callback(null, response);
		})
		.catch((error) => {
			callback(error);
		});

};

export default getTrivia;