const compareImages = require("resemblejs/compareImages");
const fs = require("fs");

async function getDiff() {
	const options = {
		output: {
			errorColor: {
				red: 255,
				green: 0,
				blue: 255
			},
			outputDiff: true
		}
	};
	const data = await compareImages(
		await fs.readFile("./testA.png"),
		await fs.readFile("./testB.png"),
		options
	);
	await fs.writeFile("./output-resemble.png",data.getBuffer());
}

getDiff();