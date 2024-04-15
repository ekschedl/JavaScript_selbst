import burgerModule from "./modules/burger";

import SliderModule from "./modules/badScript";
import sliderModule from "./modules/slider";
sliderModule();
SliderModule();
burgerModule();

//kaaatkina@MacBook-Air-von-Kaaatkina JavaScript_selbst % browserify src/index.js -o dist/bundle.j
//s
//kaaatkina@MacBook-Air-von-Kaaatkina JavaScript_selbst % browserify src/index.js -o dist/bundle.js

//npm run build  in terminal schreiben um package.json zu starten
//    "watch": "webpack --watch" in package.json   следить за всеми измененеиями во всех модулях,
//чтобы его запустить в термпинале надо набрать npm run watch
