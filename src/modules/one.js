import {animate } from "./helpers";

const one = () => {
    // const text = "kggkmbnjgjgmmbmbmbtest test tes";

    // console.log(slicer(text, 10));
    const block=document.querySelector(".quadrat")
   console.log(block);

   setTimeout(() => {
    animate({
        duration: 1000,
        timing(timeFraction) {
         return Math.pow(timeFraction, 2) //timeFraction;
        },
        draw(progress) {
            block.style.left = (50* progress) +"%"
            block.style.left = (25* progress) +"%"
            block.style.opacity = progress

        }
      });
    }, 1500)
};


export default one;
