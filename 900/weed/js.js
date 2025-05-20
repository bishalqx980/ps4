function load() {
    sysinfo()
}
function sysinfo() {
    document.getElementById("sysinfo").innerHTML = navigator.userAgent
}
function GMJS() {
    var check = document.getElementById("GM").style
    var check2 = document.getElementById("LM").style
    if (check.display == "none") {
        check.display = "block"
        check2.display = "none"
    }else if (check.display == "block") {
        check.display = "none"
    }
}
function LMJS() {
    var check = document.getElementById("LM").style
    var check2 = document.getElementById("GM").style
    if (check.display == "none") {
        check.display = "block"
        check2.display = "none"
    }else if (check.display == "block") {
        check.display = "none"
    }
}
// Notification
function loadmsg() {
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    document.getElementById('log').innerHTML = ShowMSG
}
function ani2() {
    document.getElementById('notify').className = 'notification + notification2'
    setTimeout(hide, 400)
}
function hide() {
    document.getElementById('notify').style.display = 'none'
}

//GoldHEN
function GoldHEN212() {
    ShowMSG = "Insert USB Now...Trigering Exploit!"
    loadmsg()
    PLfile = "GoldHEN212.bin";
    poc()
}
function GoldHEN224() {
    ShowMSG = "Insert USB Now...Trigering Exploit!"
    loadmsg()
    PLfile = "GoldHEN224.bin";
    poc()
}
function GoldHEN23() {
    ShowMSG = "Insert USB Now...Trigering Exploit!"
    loadmsg()
    PLfile = "GoldHEN23.bin";
    poc()
}
