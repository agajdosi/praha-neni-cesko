
function showMore(IDNumber) {
    if (document.getElementById("vylet-extra-"+IDNumber).style.display == "flex") {
        document.getElementById("vylet-extra-"+IDNumber).style.display = "none";
        document.getElementById("vylet-"+IDNumber).style.minHeight = "600px";
    } else {
        document.getElementById("vylet-extra-"+IDNumber).style.display = "flex";
        document.getElementById("vylet-"+IDNumber).style.minHeight = String(Number(document.getElementById("vylet-extra-"+IDNumber).clientHeight) + 600) + "px";
        console.log(document.getElementById("vylet-extra-"+IDNumber).clientHeight)
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
