//3 - Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

//chiedo all'utente di inserire i 5 numeri e li salvo in una variabile
var num1 = parseInt(prompt('Inserisci un numero'));
var num2 = parseInt(prompt('Inserisci il secondo numero'));
var num3 = parseInt(prompt('Inserisci il terzo numero'));
var num4 = parseInt(prompt('Inserisci il quarto'));
var num5 = parseInt(prompt('Infine...il quintoooo!'));
//sommo i caratteri
var somma = num1 + num2 +num3 + num4 + num5;
console.log(somma);
//mostro a video il risultato
document.getElementById('somma').innerHTML = "La somme dei numeri da te inserita è: " + somma;
