function resizeFunc(e) {
    if (e.target.id == "origWidth" || e.target.id == "origHeight") {
        document.getElementById("newHeight").value = document.getElementById("origHeight").value;
        document.getElementById("newWidth").value = document.getElementById("origWidth").value;
    }else{
        if (e.target.id == "newWidth") {
            scaleAPI(document.getElementById("origWidth").value, document.getElementById("origHeight").value, document.getElementById("newWidth").value, 0);
            document.getElementById("newHeight").value = window.newHeight;
        }else{
            scaleAPI(document.getElementById("origWidth").value, document.getElementById("origHeight").value, 0, document.getElementById("newHeight").value);
            document.getElementById("newWidth").value = window.newWidth;
        }
    }
    zoomFunc();
    if (document.body.offsetWidth < 900) {
        if (eval(document.getElementById("origWidth").value) > 350) {
            percent = (eval(document.getElementById("origWidth").value) / 94);
            document.getElementById("origDiv").style.height = eval(document.getElementById("origHeight").value) / percent + "vw";
        }
        if (eval(document.getElementById("newWidth").value) > 350) {
            percent = (eval(document.getElementById("newWidth").value) / 94);
            document.getElementById("newDiv").style.height = eval(document.getElementById("newHeight").value) / percent + "vw";
        }
    }
}

function zoomFunc() {
    zoomPercent = 100 / eval(document.getElementById("zoomSelect").value.slice(0, -1));
    document.getElementById("origDiv").style.height = document.getElementById("origHeight").value / zoomPercent + "px";
    document.getElementById("origDiv").style.width = document.getElementById("origWidth").value / zoomPercent + "px";

    document.getElementById("newDiv").style.height = document.getElementById("newHeight").value / zoomPercent + "px";
    document.getElementById("newDiv").style.width = document.getElementById("newWidth").value / zoomPercent + "px";
}