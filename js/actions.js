console.log("test");
document.querySelectorAll('.post__input').forEach(el => {
    el.addEventListener('input', e => {
        let place = el;
        let recDropdown = place.closest('.post__input-wrapper').querySelector('.input-rec');

        if (place.value != "") {
            recDropdown.classList.add('active')
        } else {
            recDropdown.classList.remove('active')
        }
    })
})

document.querySelectorAll('.post__input').forEach(el => {
    el.addEventListener('blur', e => {
        let recDropdown = el.closest('.post__input-wrapper').querySelector('.input-rec');
        recDropdown.classList.remove('active')
    })
})
document.querySelectorAll('.post__input').forEach(el => {
    el.addEventListener('focus', e => {
        let place = el;
        let recDropdown = el.closest('.post__input-wrapper').querySelector('.input-rec');
        
        if (place.value != "") {
            recDropdown.classList.add('active')
        } else {
            recDropdown.classList.remove('active')
        }
    })
})