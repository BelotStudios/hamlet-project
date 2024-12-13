function showLoader() {
    document.getElementById('loading-container').style.display = 'flex';
}

function hideLoader() {
    document.getElementById('loading-container').style.display = 'none';
}
showLoader();
setTimeout(hideLoader, 3000);