//es.1


let prompt1 = prompt("Scrivi una frase");
let prompt2 = prompt("Scegli una parola da cambiare");
let prompt3 = prompt("Scegli un altra parola");

let fraseCambiata = prompt1.replaceAll(prompt2, prompt3);

console.log(fraseCambiata);


Sostituire parole



//es.2
let url = prompt("Scrivi un URL");
if (
  (url.startsWith("http://") || url.startsWith("https://")) &&
  url.endsWith(".com")
) {
  alert("tutto ok");
} else {
  alert("errore");
}


//es.3
let dadoUtente = Math.floor(Math.random() * 6) + 1;
let dadoComputer = Math.floor(Math.random() * 6) + 1;
prompt("Schiacci un bottone per giocare");
let user = console.log(dadoUtente);
let computer = console.log(dadoComputer);

if (dadoUtente > dadoComputer) {
  alert("Hai vinto");
} else if (dadoUtente === dadoComputer) {
  alert("Pareggio");
} else {
  alert("Hai perso");
}