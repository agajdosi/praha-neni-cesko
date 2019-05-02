
function showMore(IDNumber) {
    //SHOW LESS
    if (document.getElementById("vylet-extra-"+IDNumber).style.display == "flex") {

        document.getElementById("vylet-extra-"+IDNumber).style.display = "none";
        document.getElementById("vylet-"+IDNumber).style.minHeight = "869px";
        document.getElementById("vylet-"+IDNumber).style.backgroundImage="url(img/vylety/"+IDNumber+"_vylet/"+IDNumber+"_vylet_2344×869px.jpg)";

    //SHOW EXTRA
    } else {
        document.getElementById("vylet-extra-"+IDNumber).style.display = "flex";
        document.getElementById("vylet-"+IDNumber).style.minHeight = String(Number(document.getElementById("vylet-extra-"+IDNumber).clientHeight) + 869) + "px";
        document.getElementById("vylet-"+IDNumber).style.backgroundImage="url(img/vylety/"+IDNumber+"_vylet/"+IDNumber+"_vylet_2344×869px.gif)";
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
