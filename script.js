window.addEventListener('keypress', e => {
    let keyCode = e.which ?? e.keyCode;

    document.querySelector('.keycode').textContent = keyCode;
    document.querySelector('.btn').textContent = e.key;
});