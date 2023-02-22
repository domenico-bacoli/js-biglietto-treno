/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole 
percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due
decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di 
ricerca.
*/

/* 
- chiedere all'utente il numero di km che il passeggero vuole percorrere e memorizzarlo
- chiedere all'utente l'età del passeggero e memorizzarlo
- definire il prezzo del biglietto in base ai km (0.21€ a km)
- ? SE l'utente ha meno di 18 anni applica uno sconto del 20%
    ° restituisci il prezzo del biglietto scontato del 20%

:? ALTRIMENTI SE l'utente ha più di 65 anni applica uno sconto del 20%
    ° restituisci il prezzo del biglietto scontato del 40%

:? ALTRIMENTI 
    ° restituisci il prezzo del biglietto standard
*/

const priceKm = 0.21;
let passengerTravelKm = parseInt( prompt("Inserisci il numero dei Km che vuoi percorrere") );
let passengerAge = parseInt ( prompt("Inserisci la tua età") );
let ticketPrice;

if ( isNaN(passengerTravelKm) || isNaN(passengerAge) ) {
    alert("Compila i campi di testo per continuare!");

} else if (passengerAge < 18) {
    discountValue20 = (passengerTravelKm * priceKm) / 100 * 20;
    ticketPrice = passengerTravelKm * priceKm - discountValue20;
    document.writeln(`Prezzo del biglietto: ${ticketPrice.toFixed(2)} €`);

} else if (passengerAge > 65) {
    discountValue40 = (passengerTravelKm * priceKm) / 100 * 40 ;
    ticketPrice = passengerTravelKm * priceKm - discountValue40;
    document.writeln(`Prezzo del biglietto: ${ticketPrice.toFixed(2)} €`);

} else  {
    ticketPrice = passengerTravelKm * priceKm;
    document.writeln(`Prezzo del biglietto: ${ticketPrice.toFixed(2)} €`);
}






