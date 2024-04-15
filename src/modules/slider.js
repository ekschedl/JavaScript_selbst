//module -законченный функциональный независимый блокб мы можем его подкючит и отключить и другой функционал не пострадает
// убираем самовызывающуюcя функцию и перепишем на модульную струкутуру/ инкапсулируем

const sliderModule = () => {
  const slider = "my slider";
  console.log(slider);
  console.log(slider);
  console.log(slider);
};

//module.exports = sliderModule; было раньше
export default sliderModule; // современный js

//kaaatkina@MacBook-Air-von-Kaaatkina JavaScript_selbst % browserify src/index.js -o dist/bundle.j
//s
//kaaatkina@MacBook-Air-von-Kaaatkina JavaScript_selbst % browserify src/index.js -o dist/bundle.js
