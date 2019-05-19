function showMore(IDNumber) {
    //SHOW LESS
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    console.log(document.getElementById("vylet-extra-"+IDNumber).scrollHeight)

    if (w > 2000){
        var vyletVyska = 869;
    } else {
        var vyletVyska = 600;
    }


    if (document.getElementById("vylet-extra-"+IDNumber).style.display == "flex") {

        document.getElementById("vylet-extra-"+IDNumber).style.display = "none";
        document.getElementById("vylet-"+IDNumber).style.minHeight = String(vyletVyska)+"px";
        console.log(document.getElementById("vylet-extra-"+IDNumber).scrollHeight)
 
    //SHOW EXTRA
    } else {
        document.getElementById("vylet-extra-"+IDNumber).style.display = "flex";
        document.getElementById("vylet-"+IDNumber).style.minHeight = String(Number(document.getElementById("vylet-extra-"+IDNumber).clientHeight) + vyletVyska) + "px";
        console.log(document.getElementById("vylet-extra-"+IDNumber).scrollHeight)
    }

    if (document.getElementById("img-"+IDNumber).getAttribute("src") != "img/vylety/"+IDNumber+"_vylet/"+IDNumber+"_vylet_2344×869px.gif") {
        document.getElementById("img-"+IDNumber).setAttribute("src", "img/vylety/"+IDNumber+"_vylet/"+IDNumber+"_vylet_2344×869px.gif");
    }


    if (document.getElementById("info-click-"+IDNumber).innerText == "VÍCE INFO") {
        document.getElementById("info-click-"+IDNumber).innerText = "MÉNĚ INFO"
    } else if (document.getElementById("info-click-"+IDNumber).innerText == "MÉNĚ INFO") {
        document.getElementById("info-click-"+IDNumber).innerText = "VÍCE INFO"
    } else if (document.getElementById("info-click-"+IDNumber).innerText == "MORE INFO") {
        document.getElementById("info-click-"+IDNumber).innerText = "LESS INFO" 
    } else {
        document.getElementById("info-click-"+IDNumber).innerText = "MORE INFO"
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
