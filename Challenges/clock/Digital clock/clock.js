// const time = document.getElementById("p.time-content");

// id="time" is automatic global variable

function showTime(){
    const hour = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    const meridian = document.getElementById("meridian");
    const weather = document.getElementById("weather");
    const now = new Date();
    let hours = now.getHours();
    const meridians = hours >= 12 ? "PM":"AM";
    const sun = (meridians == "PM") ? ((hours > 18)?("🌙"):("☀")) : ((hours < 6)?("🌞"):("🌖"));
    hours = hours % 12 || ((hours === 0) ? ("12"):("Undefined"));
    hours = hours.toString().padStart(2, 0);
    const min = now.getMinutes().toString().padStart(2, 0);
    const ms = now.getSeconds().toString().padStart(2, 0);
    const timestring = `${hours} : ${min} : ${ms} ${meridians}`;
    hour.textContent = hours + ":";
    minutes.textContent = min + ":";
    seconds.textContent = ms;
    meridian.textContent = meridians;
    weather.textContent = sun;
    console.log(`Time Element:${document.getElementById("time")}`, timestring);
}

setInterval(showTime, 1000);