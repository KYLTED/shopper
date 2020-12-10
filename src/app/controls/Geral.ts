export default class Geral {
	static loadScripts() {
		let scripts: Array<any> = [
			"/assets/libs/flickity/dist/flickity.pkgd.min.js",
			"/assets/libs/flickity-fade/flickity-fade.js",
			"/assets/js/theme.min.js",
		]

		function addScripts(index: number) {
			if (scripts[index] != null) {
					const script = document.createElement("script");
					script.src = scripts[index];
					script.async = false;
	
					document.body.appendChild(script);
					addScripts(index + 1);
			}
		}
		addScripts(0)
	}

	static getRandomNumber(min: number, max: number, quant: number){
		let arr:Array<number> = [];
		let maxnum = max;
		while (arr.length < quant) {
			let randomnum = Math.ceil(min + Math.random() * maxnum);
			if(randomnum <= maxnum){
				arr.every(function (a) {
						return a !== randomnum;
				}) && arr.push(randomnum);
			}
		}
		return arr;
	}
}