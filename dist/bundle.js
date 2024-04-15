(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const burger = require('./modules/burger')
burger()
const badSliderModule = require('./modules/badScript')
badSliderModule()
const sliderModule = require('./modules/slider')
sliderModule()



},{"./modules/badScript":2,"./modules/burger":3,"./modules/slider":4}],2:[function(require,module,exports){
// (() => {
//     const slider = 'bad script slider'

//     console.log(slider)
// }) ()

//module -законченный функциональный независимый блокб мы можем его подкючит и отключить и другой функционал не пострадает
// убираем самовызывающуюcя функцию и перепишем на модульную струкутуру/ инкапсулируем

const badSliderModule  = () => {
    const slider = 'bad script slider'

    console.log(slider)
}

module.exports = badSliderModule
},{}],3:[function(require,module,exports){
// (() => {
//     const burger = 'my menu'

//     console.log(burger)
// }) ()

//module -законченный функциональный независимый блокб мы можем его подкючит и отключить и другой функционал не пострадает
// убираем самовызывающуюcя функцию и перепишем на модульную струкутуру/ инкапсулируем

const burgerModule  = ()=> {
    const burger = 'my menu'

    console.log(burger)
}

module.exports =burgerModule
},{}],4:[function(require,module,exports){

//module -законченный функциональный независимый блокб мы можем его подкючит и отключить и другой функционал не пострадает
// убираем самовызывающуюcя функцию и перепишем на модульную струкутуру/ инкапсулируем

const sliderModule  = () => {
    const slider = 'my slider'

    console.log(slider)
}

module.exports = sliderModule
},{}]},{},[1]);



//kaaatkina@MacBook-Air-von-Kaaatkina JavaScript_selbst % browserify src/index.js -o dist/bundle.j
//s
//kaaatkina@MacBook-Air-von-Kaaatkina JavaScript_selbst % browserify src/index.js -o dist/bundle.js