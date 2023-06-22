var buttons = document.getElementsByClassName("button");

function changeButtonColor(clickedButton) {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    clickedButton.classList.add("active");
}