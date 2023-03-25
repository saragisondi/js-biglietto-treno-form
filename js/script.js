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


 

})




