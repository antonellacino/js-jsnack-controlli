//2 - L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

//faccio inserire all'utente due parole che salvo in due variabilli
var parola1 = prompt('Inserisci la prima parola');
var parola2 = prompt('Inserisci la seconda parola');
var caratteriParola1 = parola1.length;
var caratteriParola2 = parola2.length;
var  msg;

//contollo la lunghezza delle due parole e le confornto
if (caratteriParola1 > caratteriParola2) {
  msg = "La parola " + parola1 + " è più lunga di " + parola2;
} else if (caratteriParola1 === caratteriParola2){
  msg = "Le parole da te inserite hanno la stessa lunghezza."
} else  {
  msg = parola2 + " è più lunga di " + parola1;
}

//mando a video le parole in ordine di lunchezza
document.getElementById('risposta').innerHTML = msg;
