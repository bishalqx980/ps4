// Cache DOM elements
const logElement = document.getElementById("log");
const doneElement = document.getElementById("done");

// Common functions
function redirectToIndex() {
    location.href = "index.html";
}

function updateProgress(loaded, total) {
    const percentage = Math.round(100 * (loaded / total));
    logElement.style.width = `${percentage}%`;
    logElement.textContent = `${percentage}%`;
}

// Event handlers
window.applicationCache.addEventListener('downloading', () => {
    logElement.textContent = "Page Caching Started!";
});

window.applicationCache.addEventListener('progress', (e) => {
    updateProgress(e.loaded, e.total);
});

window.applicationCache.addEventListener('cached', () => {
    logElement.textContent = "Page Cached Successfully! Redirecting Please Wait...";
    setTimeout(redirectToIndex, 3000);
});

window.applicationCache.addEventListener('noupdate', () => {
    doneElement.textContent = "Page Already Cached. Redirecting Please Wait...";
    setTimeout(redirectToIndex, 0);
});

window.applicationCache.addEventListener('error', () => {
    doneElement.textContent = "Something Went Wrong (Clear Web data & try again)";
});
