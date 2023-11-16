const rates = document.querySelectorAll('.review-rate');

window.addEventListener('load', () => {
    if (rates.length > 0) {
        rates.forEach(rate => {
            let mark = parseFloat(rate.getAttribute('data-rate'))
            let width = parseFloat(rate.offsetWidth)

            rate.querySelector(".review-rate__stars-rate").style.width = `${
              (width / 5) * mark - 2 - 0.6 * mark
            }%`;
        });
    }
})