let autok = []
$(function(){
    let fajlnev = "auto.json"
    beolvasas(fajlnev, tablazat, autok, "autok")
})

function beolvasas(fajlnev, callback, tomb, kulcs){
    fetch(fajlnev)
        .then((res) => res.json())
        .then((data) =>{
            tomb = data[kulcs]
            callback(tomb)
        })
}

function tablazat(tomb){
    console.log(tomb)
    $("article").append("<table>")

    let txt = 
    "<tr><th>Név</th><th>Szín</th><th>Évjarat</th></tr>"

    for (let i = 0; i < tomb.length; i++) {
        txt += "<tr><td class='kep'>"+ tomb[i].márka +"</td><td>"+ tomb[i].szín +"</td><td>"+ tomb[i].évjárat +"</td><td><img src="+ tomb[i].kép +"></td></tr>"
    }
    $("article table").append(txt)
    kepkirak(tomb)
}

function kepkirak(tomb){
    $(".kep").click(function(){
        //console.log("kecske")
        //$("article").append("<div class'kepmegjelenit'></div>")
        for (let i = 0; i < tomb.length; i++) {
            if ($(this).html() == tomb[i].márka) {
                $("div").html("<img class='kepek'>")
                //console.log("mükszik")
                $("article div img").attr("src", tomb[i].kép)
                //console.log("lefut")
            }
        }
    })
}