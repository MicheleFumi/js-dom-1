/* Consegna
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
BONUS
Facciamo accendi e spegni:
Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...
Per fare questo bonus potremmo aver bisogno del metodo string.includes()  */


console.log("ciao");

//CREO DUE VARIABILI DOVE RICHIAMO GLI ELEMENTI IN PAGINA HTML
const buttonEl = document.getElementById("button")
const imgEl = document.getElementById("img")
console.log(imgEl);

let is_on = false

if (buttonEl.innerHTML.includes("spegni")) {

    // CREO L'EVENTO AL CLICK DOVE QUANDO CLICCO IL BOTTONE CAMBIO IMMAGINE
    button.addEventListener('click', () => {

        console.log("clicked");
        // CREO L'EVENTO DOVE AL CLICK IL TESTO DEL BOTTONE DIVENTA SPEGNI
        buttonEl.innerHTML = "spegni"
        //CREO L'EVENTO DOVE AL CLICK L'IMMAGINE CAMBIA
        imgEl.src = './assets/img/yellow_lamp.png'

        if (buttonEl == "spegni") {
            buttonEl.innerHTML = "accendi"
        }
    }
    )
} else {
    // CREO L'EVENTO AL CLICK DOVE QUANDO CLICCO IL BOTTONE CAMBIO IMMAGINE
   

        console.log("clicked");
        // CREO L'EVENTO DOVE AL CLICK IL TESTO DEL BOTTONE DIVENTA SPEGNI
        buttonEl.innerHTML = "accendi"
        //CREO L'EVENTO DOVE AL CLICK L'IMMAGINE CAMBIA
        imgEl.src = './assets/img/white_lamp.png'

        if (buttonEl == "accendi") {
            buttonEl.innerHTML = "spegni"
        }
    
    

}









