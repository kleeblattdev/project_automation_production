import fs from "fs";
/* import fs from "fs/promises"; */

/* export async function readFile() {
	try {
		const filePath = "./datamodel.json";
		const contents = await fs.readFile(filePath, { encoding: "utf8" });
		const data = await JSON.parse(contents.toString());
		return data;
	} catch (err) {
		console.log(err);
	}
} */

export const readFile = () => {
	return new Promise((resolve, reject) => {
		return fs.readFile("./datamodel.json", (err, data) => {
			if (err) reject(err);
			else {
				resolve(JSON.parse(data.toString()));
			}
		});
	});
};

export const writeFile = (data) => {
	return new Promise((resolve, reject) => {
		fs.writeFile("./datamodel.json", JSON.stringify(data), (err) => {
			if (err) reject(err);
			else {
				resolve(console.log("Daten überschrieben"));
			}
		});
	});
};

export const updateKontostand = () => {
	return new Promise((resolve, reject) => {
		readFile().then((data) => {
			data.kontostand = data.kontostand + 50 * data.workload;
			data.workload = 0;
			writeFile(data)
				.then(() => resolve(data))
				.catch((err) => reject(err));
		});
	});
};

export const updateWorkload = (resource) => {
	return new Promise((resolve, reject) => {
		readFile().then((data) => {
			if (data.workload >= 100) {
				console.log("Workload reached maximum");
			} else {
				data.workload = data.workload + Number(resource);
				writeFile(data)
					.then(() => resolve(data))
					.catch((err) => reject(err));
			}
		});
	});
};

export const buyComic = () => {
	return new Promise((resolve, reject) => {
		readFile().then((data) => {
			data.kontostand = data.kontostand - 10000;
			writeFile(data)
				.then(() => resolve(data))
				.catch((err) => reject(err));
		});
	});
};
