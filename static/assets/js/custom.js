function toggleCollapse(button) {
    const content = button.nextElementSibling;
    const arrow = button.querySelector(".arrow");

    if (content.style.maxHeight) {
        // CLOSE
        content.style.maxHeight = null;
        arrow.style.transform = "rotate(0deg)";
        button.innerHTML = '<span class="arrow">▶</span> Show Code';
    } else {
        // OPEN
        content.style.maxHeight = content.scrollHeight + "px";
        arrow.style.transform = "rotate(90deg)";
        button.innerHTML = '<span class="arrow" style="transform: rotate(90deg);">▶</span> Hide Code';
    }
}
