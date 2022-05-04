'use strict';

const allBoxes = document.querySelectorAll('.content');
const boxHeight = allBoxes[0].offsetHeight;

function throttle(func, wait) {
  let waiting = false;

  return function () {
    if (waiting) return;
    waiting = true;
    setTimeout(() => {
      func.apply(this, arguments);
      waiting = false;
    }, wait);
  };
}

const onScroll = throttle(() => {
  let visibleBoxes = document.querySelectorAll('.visible');
  let positionOfLastVisible = visibleBoxes[visibleBoxes.length - 1].getBoundingClientRect();
  let bottomOfLastVisible = positionOfLastVisible.top + boxHeight;
  if (bottomOfLastVisible + boxHeight + 20 < window.innerHeight) {
    allBoxes[visibleBoxes.length].classList.add('visible');
  } else if (bottomOfLastVisible > window.innerHeight) {
    allBoxes[visibleBoxes.length - 1].classList.remove('visible');
  }
}, 100);

document.addEventListener('scroll', onScroll);

//----------------------------------------------------
//IIFE (Immediately Invoked Function Expression)
const privateCounter = (() => {
  let count = 0;
  console.log(`Initial value: ${count}`);
  return () => {
    count += 1;
    console.log(count);
  };
})();

privateCounter();
//----------------------------------------------------
// Our basic function
let rectangleArea = (length, width) => {
  return length * width;
};

// A decorator that counts the parameters
const countParams = (fn) => {
  return (...params) => {
    console.log('countParams');
    if (params.length !== fn.length) {
      throw new Error(`Incorrect number of parameters for ${fn.name}`);
    }
    return fn(...params);
  };
};

// A decorator that requires integers
const requireIntegers = (fn) => {
  return (...params) => {
    console.log('requireIntegers');
    params.forEach((param) => {
      if (!Number.isInteger(param)) {
        throw new TypeError(`Params must be integers`);
      }
    });
    return fn(...params);
  };
};

// applied first makes it runs last
rectangleArea = countParams(rectangleArea);
// applied last makes it runs first
rectangleArea = requireIntegers(rectangleArea);

//console.log(rectangleArea(20, 30, "Dave")) //caught 1st by integers error
//console.log(rectangleArea(20, 30, 40)); //number of parameters error
console.log(rectangleArea(20, 30)); //no error
