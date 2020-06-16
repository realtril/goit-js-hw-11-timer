// const refs = {
//   day: document.querySelector("span[data-value='days']"),
//   hour: document.querySelector("span[data-value='hours']"),
//   min: document.querySelector("span[data-value='mins']"),
//   sec: document.querySelector("span[data-value='secs']"),
// };

// const targetDate = new Date("Jul 17, 2021");

// function updateClockface(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   refs.day.textContent = `${days}`;
//   refs.hour.textContent = `${hours}`;
//   refs.min.textContent = `${mins}`;
//   refs.sec.textContent = `${secs}`;
// }

// function pad(value) {
//   return String(value).padStart(2, "0");
// }

// let intervalId = setInterval(() => {
//   const startTime = Date.now();
//   let diff = targetDate - startTime;
//   updateClockface(diff);
// }, refs.sec);

//2-й вариант

// const refs = {
//   day: document.querySelector("span[data-value='days']"),
//   hour: document.querySelector("span[data-value='hours']"),
//   min: document.querySelector("span[data-value='mins']"),
//   sec: document.querySelector("span[data-value='secs']"),
// };

// class Countdown {
//   constructor(selector, targetDate) {
//     this.$el = document.querySelector(selector);
//     this.targetDate = targetDate;
//   }
//   updateClockItems(time) {
//     const pad = this.pad;
//     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     );
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     refs.day.textContent = `${days}`;
//     refs.hour.textContent = `${hours}`;
//     refs.min.textContent = `${mins}`;
//     refs.sec.textContent = `${secs}`;
//   }

//   pad(value) {
//     return String(value).padStart(2, "0");
//   }
//   loadingTimer = setInterval(() => {
//     const startTime = Date.now();
//     let diff = this.targetDate - startTime;
//     this.updateClockItems(diff);
//   }, refs.sec);
// }

// new Countdown(
//   ...Object.values({
//     selector: "#timer-1",
//     targetDate: new Date("Jul 17, 2021"),
//   })
// );

//3 вариант
class CountdownTimer {
  constructor(options) {
    this.timer = document.querySelector(options.selector);
    this.targetDate = options.targetDate;
    this.refs = {
      day: this.timer.querySelector("span[data-value='days']"),
      hour: this.timer.querySelector("span[data-value='hours']"),
      min: this.timer.querySelector("span[data-value='mins']"),
      sec: this.timer.querySelector("span[data-value='secs']"),
    };
    this.loadingTimer = setInterval(() => {
      const startTime = Date.now();
      let diff = this.targetDate - startTime;
      if (diff < 0) clearInterval(loadingTimer);
      this.updateClockItems(diff);
    }, this.refs.sec);
  }
  updateClockItems(time) {
    const pad = this.pad;
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    this.refs.day.textContent = `${days}`;
    this.refs.hour.textContent = `${hours}`;
    this.refs.min.textContent = `${mins}`;
    this.refs.sec.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});
