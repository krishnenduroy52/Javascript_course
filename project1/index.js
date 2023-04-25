const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secEl = document.getElementById("sec")


const birthday = "11 Aug 2023"
const countdown = () => {
    const currDate = new Date();
    const bDay = new Date(birthday)

    const totalSeconds = Math.abs(bDay - currDate)/1000;
    

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    daysEl.innerHTML=`<span>Days</span><span>${days}</span>`
    hoursEl.innerHTML=`<span>Hours</span><span>${hours}</span>`
    minsEl.innerHTML=`<span>Mins</span><span>${mins}</span>`
    secEl.innerHTML=`<span>Sec</span><span>${seconds}</span>`
}

countdown();
setInterval(countdown, 1000)