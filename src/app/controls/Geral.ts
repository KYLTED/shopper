export default class Geral{
	static loadScripts(){
		let scripts: Array<any> = [
			"/assets/libs/flickity/dist/flickity.pkgd.min.js",
			"/assets/libs/flickity-fade/flickity-fade.js",
			"/assets/js/theme.min.js",
		]

		function addScripts(index: number){
			if(scripts[index] != null){
				setTimeout(() => {
					const script = document.createElement("script");
					script.src = scripts[index];
					script.async = false;
			
					document.body.appendChild(script);
					addScripts(index + 1);
				}, 500);
			}
		}
		addScripts(0)
	}
}