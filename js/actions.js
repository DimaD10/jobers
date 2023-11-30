document.querySelectorAll(".input-rec-input").forEach((el) => {
  el.addEventListener("input", (e) => {
    let place = el;
    let recDropdown = place
      .closest(".input-rec-parent")
      .querySelector(".input-rec");

    if (place.value != "") {
      recDropdown.classList.add("active");
    } else {
      recDropdown.classList.remove("active");
    }
  });
});

document.querySelectorAll(".input-rec-input").forEach((el) => {
  el.addEventListener("blur", (e) => {
    let recDropdown = el
      .closest(".input-rec-parent")
      .querySelector(".input-rec");
    recDropdown.classList.remove("active");
  });
});
document.querySelectorAll(".input-rec-input").forEach((el) => {
  el.addEventListener("focus", (e) => {
    let place = el;
    let recDropdown = el
      .closest(".input-rec-parent")
      .querySelector(".input-rec");

    if (place.value != "") {
      recDropdown.classList.add("active");
    } else {
      recDropdown.classList.remove("active");
    }
  });
});

document.querySelectorAll(".value-field__input").forEach((input) => {
  input.addEventListener("input", (e) => {
    if (e.target.value != "") {
      e.target.closest(".value-field").classList.add("active");
    } else {
      e.target.closest(".value-field").classList.remove("active");
    }
  });
});
