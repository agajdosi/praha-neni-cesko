
function showMore(IDNumber) {
    if (document.getElementById("vylet-"+IDNumber).style.display == "flex") {
        document.getElementById("vylet-"+IDNumber).style.display = "none";
    } else {
        document.getElementById("vylet-"+IDNumber).style.display = "flex";
    }
}

function showSection(sectionID) {
    document.getElementById("section-1").style.display = "none"
    document.getElementById("section-2").style.display = "none"
    document.getElementById("section-3").style.display = "none"
    document.getElementById("section-"+sectionID).style.display = "initial"
}