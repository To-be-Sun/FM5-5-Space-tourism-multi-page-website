function toggleMenu() {
    const menu = document.querySelector(".menu-mobile");
    const menuIcon = document.getElementById("menu-icon");

    menu.classList.toggle("show");

    // アイコンの切り替え
    if (menu.classList.contains("show")) {
        menuIcon.src = "starter-code/assets/shared/icon-close.svg"; // × アイコンに変更
    } else {
        menuIcon.src = "starter-code/assets/shared/icon-hamburger.svg"; // ☰ アイコンに戻す
    }
}
