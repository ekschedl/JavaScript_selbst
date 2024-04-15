// (() => {
//     const slider = 'bad script slider'

//     console.log(slider)
// }) ()

//module -законченный функциональный независимый блокб мы можем его подкючит и отключить и другой функционал не пострадает
// убираем самовызывающуюcя функцию и перепишем на модульную струкутуру/ инкапсулируем

const SliderModule  = () => {
    const slider = 'bad script slider'

    console.log(slider)
}

module.exports = SliderModule


//kaaatkina@MacBook-Air-von-Kaaatkina JavaScript_selbst % browserify src/index.js -o dist/bundle.j
//s
//kaaatkina@MacBook-Air-von-Kaaatkina JavaScript_selbst % browserify src/index.js -o dist/bundle.js