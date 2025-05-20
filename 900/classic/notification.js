function loadmsg() {
    document.getElementById('notify').style.display = '';
    document.getElementById('notify').className = 'notification';
    document.getElementById('log').innerHTML = ShowMSG;
}
function ani2() {
    document.getElementById('timeout_scale').style.display = '';
    document.getElementById("timeout_scale").className = 'timeout_scale';
    setTimeout(ani_2, 4000);
}
function ani_2() {
    document.getElementById('notify').className = 'notification notification2';
    setTimeout(() => {
        document.getElementById('notify').style.display = 'none';
        document.getElementById('timeout_scale').style.display = 'none';
    }, 400);
}
// Demo Notification
function demo_loadmsg() {
    document.getElementById("nomad_div").style.display = "none";
    ShowMSG = "This is a Demo Notification!";
    loadmsg();
    ani2();
}