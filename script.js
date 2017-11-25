$(document).ready(()=> {
  animateColor();
  animateClock();
// end ready
});

function animateColor() {
  let decreaseColor = false;
  let decreasePercent = false;
  let colorCounter = 0;
  let angleCounter = 0;
  let percentCounter = 100;

  setInterval(() => {
    // controls angleCounter
    angleCounter++;

    // entire block controls colorCounter
    if (colorCounter === 256) {
      decreaseColor = !decreaseColor;
      colorCounter--;
    }
    else if (decreaseColor === true) {

      if (colorCounter === 0) {
        decreaseColor = !decreaseColor;
      }
      else {
        colorCounter--;
        console.log(colorCounter);
      }
    }
    else {
      colorCounter++;
    }

    // // block controls percentCounter
    // if (percentCounter === 0) {
    //   decreasePercent = !decreasePercent;
    //   percentCounter++;
    // }
    // else if (decreasePercent === true) {
    //
    //   if (percentCounter === 100) {
    //     decreasePercent = !decreasePercent;
    //   }
    //   else {
    //     percentCounter++;
    //     console.log(percentCounter);
    //   }
    // }
    // else {
    //   percentCounter--;
    // }

    $('.gradient-box').css('background-image',
    `linear-gradient(-${angleCounter}deg, #8100FF 0%, rgb(${colorCounter}, 178, 254) ${percentCounter}%)`
  );
}, 10);
}

function animateClock() {
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  setInterval(()=> {
    $('.sec-hand').css('transform',`rotate(${seconds}deg)`);
    $('.min-hand').css('transform',`rotate(${minutes}deg)`);
    $('.hour-hand').css('transform',`rotate(${hours}deg)`);
    seconds+=6;
    if (seconds % 360 === 0) {
      minutes+=6;
      if (minutes % 60 === 0) {
        hours+=5;
      }
    }
  }, 1000);
}
