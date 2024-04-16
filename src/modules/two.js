const twoModule = () => {


//   // через setInterval лушче анимации не делать
//   const airplane =document.querySelector('.airplane')
//   const man =document.querySelector('.man')

//   let count = 0
//   let idInterval

//   const flyAnimate =() => {
//     count++
//     console.log(count)
  
//     if(count<200){
//     man.style.top = count + 'px'
//     airplane.style.left = count * 2 + 'px'
//   } else if (count <500) {
//     airplane.style.left = count * 2 + 'px'
//   } else {
//     clearInterval(idInterval)
//   }
// }
//   idInterval = setInterval(flyAnimate, 150)
//   }

 // рекомендуется через requestAnimationFrame - учитывает пропуск кадра и делает плавной анимацию
 // рекомендуется через requestAnimationFrame - учитывает пропуск кадра и делает плавной анимацию
 const airplane = document.querySelector('.airplane');
 const man = document.querySelector('.man');
 
 let active = false;
 let count = 0;
 let idInterval;
 
 const flyAnimate = () => {
   count++;
   idInterval = requestAnimationFrame(flyAnimate);
 
   if (count < 200) {
     man.style.top = count + 'px';
     airplane.style.left = count * 5 + 'px';
   } else if (count < 500) {
     airplane.style.left = count * 5 + 'px';
   } else {
     cancelAnimationFrame(idInterval);
   }
 };
 
 document.addEventListener('click', () => {
   if (active) {
    cancelAnimationFrame(idInterval);
    active = false;
  
   } else {
    idInterval = requestAnimationFrame(flyAnimate);
    active = true;
    
   
    
   }
 
 })
 






















}

  
  export default twoModule;
  