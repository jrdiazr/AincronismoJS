const somethingWillHappen = () => {
	return new Promise((res, rej) => {
		if (true) {
			res("Hey!");
		} else {
			rej("Upss!");
		}
	});
};

somethingWillHappen()
	.then(res => {
		console.log(res);
	})
	.catch(err => {
		console.log(err);
	});

const somethingWillHappen2 = () => {
	return new Promise((res, rej) => {
		if (true) {
			setTimeout(() => {
				res(true);
			}, 2000);
		} else {
			const error = new Error("upssss!");
			rej(error);
		}
	});
};

somethingWillHappen2()
	.then(res => {
		console.log(res);
	})
	.catch(err => {
		console.error(err.message);
	});

Promise.all([somethingWillHappen(), somethingWillHappen2()])
	.then(res => {
		console.log("array", res);
	})
	.catch(err => {
		console.error(err);
	});
