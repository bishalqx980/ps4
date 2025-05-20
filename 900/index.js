function onload() {
    const dateElement = document.getElementById("date");
    const clockElement = document.getElementById("clock");

    let date = new Date();
    dateElement.textContent = `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`;
    clockElement.textContent = `${date.getHours()}:${date.getMinutes()}`;
}

function ShowLogMsg(message = "") {
    document.getElementById("log").textContent = `[ ${message} ]`;
}
