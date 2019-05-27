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
        document.getElementById("info-click-"+IDNumber).style.backgroundImage = "url(img/ikonky/minus.png)";
    } else if (document.getElementById("info-click-"+IDNumber).innerText == "MÉNĚ INFO") {
        document.getElementById("info-click-"+IDNumber).innerText = "VÍCE INFO"
        document.getElementById("info-click-"+IDNumber).style.backgroundImage = "url(img/ikonky/plus.png)";
    } else if (document.getElementById("info-click-"+IDNumber).innerText == "MORE INFO") {
        document.getElementById("info-click-"+IDNumber).innerText = "LESS INFO" 
        document.getElementById("info-click-"+IDNumber).style.backgroundImage = "url(img/ikonky/minus.png)";
    } else {
        document.getElementById("info-click-"+IDNumber).innerText = "MORE INFO"
        document.getElementById("info-click-"+IDNumber).style.backgroundImage = "url(img/ikonky/plus.png)";
    }
}

function showSection(sectionID) {
    document.getElementById("section-1").style.display = "none"
    document.getElementById("section-2").style.display = "none"
    document.getElementById("section-3").style.display = "none"
    document.getElementById("section-"+sectionID).style.display = "initial"
}

function playTrailer(number){
    
    var trailerWindow = document.createElement('div');
    trailerWindow.id = "trailer-window"

    var file = 'trailerwindow-' + String(number) + '.html' 
    var req = new XMLHttpRequest();
    req.open('GET', file, true);
    req.onreadystatechange = function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return;
        document.getElementById('trailer-window').innerHTML= this.responseText;
    };
    req.send();

    document.body.appendChild(trailerWindow);
}

function closeTrailer(number){
    trailerWindow = document.getElementById('trailer-window');
    trailerWindow.parentNode.removeChild(trailerWindow);
}

window.onload = function() {
    showSection("1");
}
