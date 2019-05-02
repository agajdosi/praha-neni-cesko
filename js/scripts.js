
function showMore(IDNumber) {
    if (document.getElementById("vylet-extra-"+IDNumber).style.display == "flex") {
        document.getElementById("vylet-extra-"+IDNumber).style.display = "none";
        document.getElementById("vylet-"+IDNumber).style.minHeight = "600px";
        console.log(document.getElementById("vylet-"+IDNumber).style.background)
        document.getElementById("vylet-"+IDNumber).style.background = "../img/vylety/1_up.jpg"
    } else {
        document.getElementById("vylet-extra-"+IDNumber).style.display = "flex";
        document.getElementById("vylet-"+IDNumber).style.minHeight = String(Number(document.getElementById("vylet-extra-"+IDNumber).clientHeight) + 600) + "px";
        document.getElementById("vylet-"+IDNumber).style.background = "../img/vylety/1_down.jpg"
    }

    if (document.getElementById("info-click-"+IDNumber).innerText == "VÍCE INFO") {
        document.getElementById("info-click-"+IDNumber).innerText = "MÉNĚ INFO"
    } else {
        document.getElementById("info-click-"+IDNumber).innerText = "VÍCE INFO"
    }
}

function showSection(sectionID) {
    document.getElementById("section-1").style.display = "none"
    document.getElementById("section-2").style.display = "none"
    document.getElementById("section-3").style.display = "none"
    document.getElementById("section-"+sectionID).style.display = "initial"
}

window.onload = function() {
    showSection("1");
}
