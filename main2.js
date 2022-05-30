//erstellen der nötigen Variablen
let punkteBot=0
let punkteSp=0
let summeBot=0
let summeSp=0
let wuerfel1
let wuerfel2
let sadr=1
let rundenBot=0
let rundenSp=0

//hier wird von/für den Bot gewürfelt und dessen Runde beendet
function StarteBot(){

    //wuerfel1&2 wird ein Wert von 1-6 zugewiesen
    wuerfel1 = Math.floor(Math.random()*6)+1
    document.getElementById("würfel1").innerHTML = "Würfel1:" + wuerfel1

    wuerfel2 = Math.floor(Math.random()*6)+1
    document.getElementById("würfel2").innerHTML = "Würfel2:" + wuerfel2

    /*dieser Teil führt eigentlich nur die Funktion bot() aus, da der Button mit der Funktion StarteBot() nur be-
    nutzt werden kann, wenn die Variable sadr === 1 ist
    */
    if(sadr === 3){
        Auswertung()
        sadr=1
    }else if(sadr === 1){

        /*die Funktion bot() lässt je nach Summe der Würfel die Variable sadr auf 2 erhöhen (mit der Funktion
        RundeBeenden()) oder die Funktion StarteBot() neu starten
        */
        bot()
    }else if(sadr === 2){
        spieler()
        if(sadr===3){
            Auswertung()
        }
    }

    //hiermit wird dem Spieler mit einer Id klargemacht, wer an der Reihe ist
    if(sadr===1) {document.getElementById("sadr").innerHTML = "Der Bot ist an der Reihe."}
    if(sadr===2) {document.getElementById("sadr").innerHTML = "Der Spieler ist an der Reihe."}
}

function würfeln(){

    //wuerfel1&2 wird ein Wert von 1-6 zugewiesen
    wuerfel1 = Math.floor(Math.random()*6)+1
    document.getElementById("würfel1").innerHTML = "Würfel1:" + wuerfel1

    wuerfel2 = Math.floor(Math.random()*6)+1
    document.getElementById("würfel2").innerHTML = "Würfel2:" + wuerfel2

    /*dieser Teil führt eigentlich nur die Funktion spieler() aus, da der Button mit der Funktion würfeln() nur be-
        nutzt werden kann, wenn die Variable sadr === 2 ist
        */
    if(sadr === 3){
        Auswertung()
        sadr=1
    }else if(sadr === 1){
        bot()
    }else if(sadr === 2){

        /*die Funktion spieler() lässt je nach Summe der Würfel die Variable sadr auf 3 erhöhen (mit der Funktion
        RundeBeenden(), dabei läuft auch die Auswertung ab)
        */
        spieler()
        if(sadr===3){
            Auswertung()
        }
    }

    //hiermit wird dem Spieler mit einer Id klargemacht, wer an der Reihe ist
    if(sadr===1) {document.getElementById("sadr").innerHTML = "Der Bot ist an der Reihe."}
    if(sadr===2) {document.getElementById("sadr").innerHTML = "Der Spieler ist an der Reihe."}
}

//diese Funktion ist so ziemlich an jedem möglichen Ausgang für das Spiel
/* sie erhöht immer sadr um 1, falls sadr dadurch jedoch auch 3 gesetzt wird, folgt die Auswertung und da hier sadr
immer verändert wird passt es gut am Ende die jeweiligen Buttons zu disablen
*/
function RundeBeenden(){
    Sadr()
    if(sadr===3){
        Auswertung()
    }
    ButtonsDeaktivieren()
}
/* Auswertung() ist selbsterklärend, je nachdem wer eine höhere Summe hat bekommt derjenige einen Punkt und dann wird dem
Spieler mit der Id auswertung klargemacht wer gewonnen hat. Danach werden die Punkte angegeben und die Summen, sowie die
Variable sadr auf ihren Ursprungswert zurückgesetzt
 */
function Auswertung(){
    if(summeBot===summeSp){
        document.getElementById("auswertung").innerHTML="Diese Runde war ein Gleichstand."
    }else if(summeBot>=summeSp){
        punkteBot=punkteBot+1
        document.getElementById("auswertung").innerHTML="Spieler1 hat die Runde gewonnen."
    }else if(summeSp>=summeBot){
        punkteSp=punkteSp+1
        document.getElementById("auswertung").innerHTML="Spieler2 hat die Runde gewonnen."
    }
    document.getElementById("punkteBot").innerHTML = "Punkte Spieler1:" + punkteBot
    document.getElementById("punkteSp").innerHTML = "Punkte Spieler2:" + punkteSp
    summeBot=0
    summeSp=0
    document.getElementById("summeBot").innerHTML = summeBot
    document.getElementById("summeSp").innerHTML = summeSp
    sadr=1
}
//bot() löst die unterschiedlichen Ausgänge/Fälle des Spiels für den Bot
function bot(){
    //die rundenAnzahl vom Bot wird erhöht, das ist wichtig, da der Spieler nicht mehr Würfe haben darf als der Bot
    rundenBot=rundenBot+1
    //so würde ich mich entscheiden die Runde zu beenden bzw. weiter zu würfeln
    if(summeBot<rundenBot*9||summeBot===0){
        /*falls die WürfelSumme === 7 ist, wird die Runde beendet, ansonsten bekommt der Bot die Summe auf seine
        addiert und die Funktion StarteBot() wird erneut ausgeführt, sodass sich das Programm so lange in einer Schleife
        befindet bis eine 7 gewürfelt wird oder man die Runde laut mir beenden sollte
         */
        //setTimeout() sorgt dafür, dass das Programm für die entsprechenden Millisekunden wartet, während eine Funktion durchgeführt wird
    if(wuerfel1+wuerfel2===7){
        document.getElementById("summeBot").innerHTML = summeBot
        setTimeout(RundeBeenden,2000)
    }else{
        summeBot = summeBot + wuerfel1 + wuerfel2
        document.getElementById("summeBot").innerHTML = summeBot
        setTimeout(StarteBot,2000)
    }}else{
        setTimeout(RundeBeenden,2000)
    }
}

function spieler(){
    rundenSp=rundenSp+1
    if(rundenBot>=rundenSp) {
        if (wuerfel1 + wuerfel2 === 7) {
            document.getElementById("summeSp").innerHTML = summeSp
            RundeBeenden()
        } else {
            summeSp = summeSp + wuerfel1 + wuerfel2
            document.getElementById("summeSp").innerHTML = summeSp
        }
        if (summeSp > summeBot) {
            RundeBeenden()
        }
    }else{
        Sadr()
    }
}
//hier wird die Variable sadr um 1 erhöht
function Sadr(){
    sadr=sadr+1
}
//die Funktion ButtonsDeaktivieren() sorgt dafür das je nachdem welcher Spieler/Bot dran ist, der andere nicht Würfeln kann bzw. dessen Knopf deaktiviert ist
function ButtonsDeaktivieren(){
    console.log("SADR:" + sadr)
    if(sadr === 1) {
        document.getElementById("BotButton").disabled = false
        document.getElementById("SpielerButton").disabled = true
        console.log("S1")
    }
    if(sadr === 2){
        document.getElementById("BotButton").disabled = true
        document.getElementById("SpielerButton").disabled = false
        console.log("S2")
    }
}