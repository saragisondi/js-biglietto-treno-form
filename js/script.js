//CHIEDERE ALL'UTENTE IL NOME, COGNOME, EMAIL, KM e CARTA FRECCIA
document.getElementById("genera").addEventListener('click', function (){
  const Fname = document.getElementById("firstname").value;
  console.log(Fname)

  const Lname = document.getElementById("lastname").value;
  document.getElementById("name-passenger").innerHTML = (Fname + " " + Lname);
  console.log(Lname)

  const email = document.getElementById("email").value;
  console.log(email)

  const km = document.getElementById("km").value;
  console.log(km)

  const cartaFreccia = document.getElementById("carta-freccia").value;
  document.getElementById("offerta").innerHTML = (cartaFreccia);
  console.log(cartaFreccia)

  //PREZZO TOTALE DEL VIAGGIO
const price = 0.21;
console.log(price);
const totalPrice = (price * km);
console.log(totalPrice)

//SCONTISTICA

//UNDER18
const discount20 =  (20/100) * totalPrice;
console.log(discount20)

const under18 = totalPrice - discount20;
console.log(under18)


//OVER65
const discount40 = (40/100) * totalPrice;
console.log(discount40)

const over65 = totalPrice - discount40;
console.log(over65)

let ticket="";
//CONDIZIONE
if ( cartaFreccia == "Senior"){
  ticket = over65;
  document.getElementById('price-ticket').innerHTML = `
  ${over65}€
  `
  document.getElementById('cart').innerHTML = `
  ${totalPrice}€
  `
}else if(cartaFreccia !== "Senior"){
  ticket = under18;
  document.getElementById('price-ticket').innerHTML = `
  ${under18}€
  `
  document.getElementById('cart').innerHTML = `
  ${totalPrice}€
  `
}


if(cartaFreccia == "Nessuna"){
  ticket = totalPrice;
  document.getElementById('price-ticket').innerHTML = `
  ${totalPrice}€
  `
  document.getElementById('cart').innerHTML = `
  ${totalPrice}€
  `
}
//NUMERO CARROZZA
const carriageRandom = Math.floor(Math.random()*12);
document.getElementById("train-carriage").innerHTML = `
${carriageRandom}
`
console.log(carriageRandom)

})


