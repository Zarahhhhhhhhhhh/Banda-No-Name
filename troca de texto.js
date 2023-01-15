function animateText() {
    var textos = ["Banda sem nome", "A escolha certa para dar nome à sua festa!"];
    var index = 0;
    var firstTime = true;
    setInterval(function () {
        if (firstTime) {
            firstTime = false;
            index = 1;
        }
        document.getElementById("texto").innerHTML = textos[index];
        document.getElementById("texto").classList.add("fadeIn");
        setTimeout(function () {
            document.getElementById("texto").classList.remove("fadeIn");
        }, 1000);
        index = (index + 1) % textos.length;
    }, 12000);
}
