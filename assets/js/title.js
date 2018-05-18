if (document.addEventListener) { 
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 960);

}

var x = 0;

var titleText = ["VAC BANNING 0%","VAC BANNING 14%","VAC BANNING 22%", "VAC BANNING 26%", "VAC BANNING 30%", "VAC BANNING 37%","VAC BANNING 40%", "VAC BANNING 41%", "VAC BANNING 47%", "VAC BANNING 50%", "VAC BANNING 58%", "VAC BANNING 69%", "VAC BANNING 73%", "VAC BANNING 78%", "!!VAC FAIL!!", "!!VAC FAIL!!", "!!VAC FAIL!!", "USE IS NOT CHEATING", "USE IS NOT CHEATING", "USE IS NOT CHEATING",];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
