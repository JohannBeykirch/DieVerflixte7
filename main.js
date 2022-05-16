let punkte1=0
let punkte2=0
let summe1=0
let summe2=0
let wuerfel1
let wuerfel2
let sadr=1
let runden1=0
let runden2=0

function würfeln(){

    if(sadr<3) {
        document.getElementById("sadr").innerHTML = "Spieler" + sadr + " ist an der Reihe."
    }else{
        document.getElementById("sadr").innerHTML= "AUSWERTUNG"
    }

    wuerfel1 = Math.floor(Math.random()*6)+1
    document.getElementById("würfel1").innerHTML = "Würfel1:" + wuerfel1

    wuerfel2 = Math.floor(Math.random()*6)+1
    document.getElementById("würfel2").innerHTML = "Würfel2:" + wuerfel2

    if(sadr === 3){
        Auswertung()
        sadr=1
    }else if(sadr === 1){
        spieler1()
    }else if(sadr === 2){
        spieler2()
        if(sadr===3){
            Auswertung()
        }
    }

    if(sadr<3) {
        document.getElementById("sadr").innerHTML = "Spieler" + sadr + " ist an der Reihe."
    }else{
        document.getElementById("sadr").innerHTML= "AUSWERTUNG"
    }

}

function RundeBeenden(){
    Sadr()
    if(sadr===3){
        Auswertung()
    }
}

function Auswertung(){
    if(summe1===summe2){
        document.getElementById("auswertung").innerHTML="Diese Runde war ein Gleichstand."
    }else if(summe1>=summe2){
        punkte1=punkte1+1
        document.getElementById("auswertung").innerHTML="Spieler1 hat die Runde gewonnen."
    }else if(summe2>=summe1){
        punkte2=punkte2+1
        document.getElementById("auswertung").innerHTML="Spieler2 hat die Runde gewonnen."
    }
    document.getElementById("punkte1").innerHTML = "Punkte Spieler1:" + punkte1
    document.getElementById("punkte2").innerHTML = "Punkte Spieler2:" + punkte2
    summe1=0
    summe2=0
    document.getElementById("summe1").innerHTML = summe1
    document.getElementById("summe2").innerHTML = summe2
    sadr=1
}

function spieler1(){
    runden1=runden1+1
    if(wuerfel1+wuerfel2===7){
        document.getElementById("summe1").innerHTML = summe1
        RundeBeenden()
    }else{
        summe1 = summe1 + wuerfel1 + wuerfel2
        document.getElementById("summe1").innerHTML = summe1
    }
}

function spieler2(){
    runden2=runden2+1
    if(runden1>=runden2) {
        if (wuerfel1 + wuerfel2 === 7) {
            document.getElementById("summe2").innerHTML = summe2
            RundeBeenden()
        } else {
            summe2 = summe2 + wuerfel1 + wuerfel2
            document.getElementById("summe2").innerHTML = summe2
        }
        if (summe2 > summe1) {
            Sadr()
        }
    }else{
        Sadr()
    }
}

function Sadr(){
    sadr=sadr+1
}

