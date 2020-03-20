//1 - L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

//creo le due variabili contenenti il numero inserito dall'utente
var msg;
var numero1 = parseInt(prompt('Inserisci un numero'));
var numero2 = parseInt(prompt('Inserisci un secondo numero'));
//indetifico tra i due numeri qual'è il maggiore
if (numero1>numero2) {
  msg = "Il numero più grande è: " + numero1;
} else {
  msg = "Il numero più grande è: " + numero2;
}
//rimando a video la risposta
document.getElementById('risposta').innerHTML= msg;
