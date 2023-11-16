const place = document.getElementById('place-input');
const recDropdown = document.querySelector('.input-rec')

place.addEventListener('input', () => {
    if (place.value != "") {
        recDropdown.classList.add('active')
    } else {
        recDropdown.classList.remove('active')
    }
})
place.addEventListener('blur', () => {
    recDropdown.classList.remove('active')
})
place.addEventListener('focus', () => {
    if (place.value != "") {
        recDropdown.classList.add('active')
    } else {
        recDropdown.classList.remove('active')
    }
})