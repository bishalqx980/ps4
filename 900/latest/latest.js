function showdiv(div_id) {
    const div_ids = {
        payloads_div: document.getElementById("payloads_div"),
        gamemods_div: document.getElementById("gamemods_div"),
        linux_loaders: document.getElementById("linux_loaders"),
    }

    for (const key in div_ids) {
        if (key == div_id) {
            div_ids[key].style.display = '';
        } else {
            div_ids[key].style.display = 'none';
        }
    }
}
