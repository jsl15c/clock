// Author: Jarrod Luca

makeTicks();
$(document).ready(()=> {
  animateColor();
  animateClock();
// end ready
});

function makeTicks() {
  for (let i = 0; i < 12; i++) {
    $('.tick-marks').append(
      `<div class='tick-${i}'></div>`
    );
  }
  // for (let i = 0; i < 4; i++) {
  //   let scaled = 0.8 - i*2/10;
  //   $('.clock').append(
  //     `<div class="clock new"
  //           style="transform:scale(${scaled})
  //       ">
  //       <div class="center-dial"></div>
  //       <div class="hour-hand"></div>
  //       <div class="min-hand"></div>
  //       <div class="sec-hand"></div>
  //       <div class="tick-marks"></div>
  //     </div>`
  //   );
  // }
}

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
      }
    }
    else {
      colorCounter++;
    }
    $('.clock').css('background-image',
    `linear-gradient(-${angleCounter}deg, #8100FF 0%, rgb(${colorCounter}, 178, 254) 100%)`
  );
}, 10);
}

function animateClock() {
  let time = convertTimetoDegrees();

  setInterval(()=> {
    $('.sec-hand').css('transform',`rotate(${time.sec}deg)`);
    $('.min-hand').css('transform',`rotate(${time.min}deg)`);
    $('.hour-hand').css('transform',`rotate(${time.hour}deg)`);
    time.sec+=6;
    if (time.sec % 360 === 0) {
      time.min+=6;
      if (time.min % 60 === 0) {
        time.hour+=30;
      }
    }
  }, 1000);
}

function convertTimetoDegrees() {
  var time = new Date();
  // console.log(time.getHours()+":"+time.getMinutes()+":"+time.getSeconds());
  let sec = time.getSeconds();
  let min = time.getMinutes();
  let hour = time.getHours();
  // convert hours
  if (hour === 24) {
    hour = 0;
  }
  else if (hour > 12) {
    hour = hour - 12;
  }
  else {
    hour = hour;
  }
  hour = hour * 30;
  min = min * 6;
  sec = sec * 6;

  let finalTime = {hour:hour,min:min,sec:sec};
  return finalTime;
}
