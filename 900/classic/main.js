function load() {
    console.log("PS4 Jailbreak HOST For FW: 9.00 by @bishalqx980\nTwitter: https://twitter.com/bishalqx980");
    theme_visual();
    colorScheme_visual();
    document.getElementById("useragent_info").innerHTML = navigator.userAgent;
    document.getElementById("platform_info").innerHTML = navigator.platform;
    // AutoLoadHEN
    var AutoLoadHEN_check = localStorage.getItem("AutoLoadHEN");
    if (AutoLoadHEN_check == "true") {
        document.getElementById("AutoLoadHEN").checked = true;
    }else {
        document.getElementById("AutoLoadHEN").checked = false;
    }
    // AutoLoadHENVersion
    var AutoLoadHENVersion_check = localStorage.getItem("AutoLoadHENVersion");
    document.getElementById("AutoLoadHENVersion").value = AutoLoadHENVersion_check;
    // InsertUSBMethod
    var InsertUSBMethod_check = localStorage.getItem("InsertUSBMethod");
    document.getElementById("InsertUSBMethod").value = InsertUSBMethod_check;
}
// AutoLoadHEN_Toggle
function AutoLoadHEN_Toggle() {
    var Get_AutoLoadHEN = document.getElementById("AutoLoadHEN");
    if (Get_AutoLoadHEN.checked == true){
        localStorage.setItem("AutoLoadHEN", "true");
    }else if (Get_AutoLoadHEN.checked == false) {
        localStorage.setItem("AutoLoadHEN", "false");
    }
}
// AutoLoadHENVersion_Toggle
function AutoLoadHENVersion_Toggle() {
    var Get_AutoLoadHENVersion = document.getElementById("AutoLoadHENVersion").value;
    localStorage.setItem("AutoLoadHENVersion", Get_AutoLoadHENVersion);
}
// InsertUSBMethod_Toggle
function InsertUSBMethod_Toggle() {
    var Get_InsertUSBMethod = document.getElementById("InsertUSBMethod").value;
    localStorage.setItem("InsertUSBMethod", Get_InsertUSBMethod);
}
// Nomad Div Show/Hide
function nomad_div_visual() {
    var check_visual = document.getElementById("nomad_div");

    if (check_visual.style.display == "none") {
        check_visual.style.display = "";
    }else {
        check_visual.style.display = "none";
    }
}
// Theme
function theme_visual_select() {
    var check_theme_select = document.getElementById("theme").value;
    // localstorage work
    localStorage.setItem("theme", check_theme_select);
    theme_visual();
}
function theme_visual() {
    var check_theme = localStorage.getItem("theme");
    var change_bg = document.body.style;
    // Select Theme corrector
    document.getElementById("theme").value = check_theme;
    // Trigger Theme
    if (check_theme == "default") {
        change_bg.backgroundImage = "";
    }else if (check_theme == "0") {
        change_bg.backgroundImage = "URL('./img/0.jpg')";
    }else if (check_theme == "1") {
        change_bg.backgroundImage = "URL('./img/1.jpg')";
    }else if (check_theme == "2") {
        change_bg.backgroundImage = "URL('./img/2.jpg')";
    }else if (check_theme == "3") {
        change_bg.backgroundImage = "URL('./img/3.jpg')";
    }else if (check_theme == "4") {
        change_bg.backgroundImage = "URL('./img/4.jpg')";
    }else if (check_theme == "5") {
        change_bg.backgroundImage = "URL('./img/5.jpg')";
    }else if (check_theme == "6") {
        change_bg.backgroundImage = "URL('./img/6.jpg')";
    }else if (check_theme == "7") {
        change_bg.backgroundImage = "URL('./img/7.jpg')";
    }else if (check_theme == "8") {
        change_bg.backgroundImage = "URL('./img/8.jpg')";
    }else if (check_theme == "9") {
        change_bg.backgroundImage = "URL('./img/9.jpg')";
    }
}
// Color Scheme
function colorScheme_visual_select() {
    var check_colorScheme_select = document.getElementById("colorScheme").value;
    // localstorage work
    localStorage.setItem("colorScheme", check_colorScheme_select);
    colorScheme_visual();
}
function colorScheme_visual() {
    var check_colorScheme = localStorage.getItem("colorScheme");
    // Select Color corrector
    document.getElementById("colorScheme").value = check_colorScheme;
    // Trigger ColorScheme
    if (check_colorScheme == "default") {
        scheme_default();
    }else if (check_colorScheme == "transparent") {
        scheme_transparent();
    }else if (check_colorScheme == "cappuccino") {
        scheme_cappuccino();
    }
    // Load Scheme
    function scheme_default() {
        var tsc_head_main_div = document.getElementById("head_main_div").style;
        var tsc_middle_div = document.getElementById("middle_div").style;
        var tsc_nomad_div = document.getElementById("nomad_div").style;
        var tsc_bottom_div = document.getElementById("bottom_div").style;

        // working with body
        document.body.style.backgroundColor = "";

        tsc_head_main_div.background = "";
        tsc_nomad_div.background = "";
        tsc_bottom_div.background = "";

        tsc_head_main_div.color = "";
        tsc_middle_div.color = "";
        tsc_nomad_div.color = "";
        tsc_bottom_div.color = "";

        tsc_head_main_div.borderColor = "";
        tsc_middle_div.borderColor = "";
        tsc_nomad_div.borderColor = "";
        tsc_bottom_div.borderColor = "";
    }
    // scheme transparent
    function scheme_transparent() {
        var tsc_head_main_div = document.getElementById("head_main_div").style;
        var tsc_middle_div = document.getElementById("middle_div").style;
        var tsc_nomad_div = document.getElementById("nomad_div").style;
        var tsc_bottom_div = document.getElementById("bottom_div").style;

        // working with body
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";

        tsc_head_main_div.background = "rgba(0, 0, 0, 0.1)";
        tsc_nomad_div.background = "rgba(0, 0, 0, 0.1)";
        tsc_bottom_div.background = "rgba(0, 0, 0, 0.1)";

        tsc_head_main_div.color = "rgb(255, 255, 255)";
        tsc_middle_div.color = "rgb(255, 255, 255)";
        tsc_nomad_div.color = "rgb(255, 255, 255)";
        tsc_bottom_div.color = "rgb(255, 255, 255)";

        tsc_head_main_div.borderColor = "rgba(0, 0, 0, 0.1)";
        tsc_middle_div.borderColor = "rgba(0, 0, 0, 0.1)";
        tsc_nomad_div.borderColor = "rgba(0, 0, 0, 0.1)";
        tsc_bottom_div.borderColor = "rgba(0, 0, 0, 0.1)";
    }
    // scheme cappuccino
    function scheme_cappuccino() {
        var tsc_head_main_div = document.getElementById("head_main_div").style;
        var tsc_middle_div = document.getElementById("middle_div").style;
        var tsc_nomad_div = document.getElementById("nomad_div").style;
        var tsc_bottom_div = document.getElementById("bottom_div").style;

        // working with body
        document.body.style.backgroundColor = "rgb(214, 183, 159)";

        tsc_head_main_div.background = "rgb(58, 46, 46)";
        tsc_nomad_div.background = "rgb(214, 183, 159)";
        tsc_bottom_div.background = "rgb(58, 46, 46)";

        tsc_head_main_div.color = "rgb(247, 236, 223)";
        tsc_middle_div.color = "rgb(75, 56, 50)";
        tsc_nomad_div.color = "rgb(75, 56, 50)";
        tsc_bottom_div.color = "rgb(247, 236, 223)";

        tsc_head_main_div.borderColor = "rgb(58, 46, 46)";
        tsc_middle_div.borderColor = "rgb(75, 56, 50)";
        tsc_nomad_div.borderColor = "rgb(75, 56, 50)";
        tsc_bottom_div.borderColor = "rgb(58, 46, 46)";
    }
}
// Restore all Settings
function restore_all() {
    localStorage.clear();
    location.reload();
}