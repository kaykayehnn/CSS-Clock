let date = new Date();

let seconds = date.getSeconds();
let minutes = date.getMinutes();
let hours = date.getHours();

let hoursHand = document.querySelector(".hours-hand-container");
let minutesHand = document.querySelector(".minutes-hand-container");
let secondsHand = document.querySelector(".seconds-hand-container");

let secondsDegrees = (seconds / 60) * 360;
let minutesDegrees = ((minutes * 60 + seconds) / 3600) * 360;
let hoursDegrees = ((hours * 3600 + minutes * 60 + seconds) / 86400) * 2 * 360;

secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
