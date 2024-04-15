// (() => {
//     const burger = 'my menu'

//     console.log(burger)
// }) ()

//module -законченный функциональный независимый блокб мы можем его подкючит и отключить и другой функционал не пострадает
// убираем самовызывающуюcя функцию и перепишем на модульную струкутуру/ инкапсулируем

const burgerModule = () => {
  const burger = "my menu";
  console.log(burger);
  console.log(burger);
};

export default burgerModule;
