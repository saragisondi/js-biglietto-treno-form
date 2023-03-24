// //CHIEDERE ALL'UTENTE I KM CHE VUOLE PERCORRERE E LA SUA ETA'
// const km = ('inserisci i km che vuoi percorrere')
// const age = ('inserisci la tua età')
// console.log('km', 'age')
// const name = ('inserisci il tuo nome');
// console.log('name')
// //KM
// document.getElementById('km').innerHTML = (km);
// console.log(km)

// //ETA'
// document.getElementById('age').innerHTML = (age);
// console.log(age)

// //PREZZO TOTALE DEL VIAGGIO
// const price = 0.21;
// console.log(price);
// const totalPrice = (price * km);

// //SCONTISTICA

// //UNDER18
// const discount20 =  (20/100) * totalPrice;
// console.log(discount20)

// const under18 = totalPrice - discount20;
// console.log(under18)


// //OVER65
// const discount40 = (40/100) * totalPrice;
// console.log(discount40)

// const over65 = totalPrice - discount40;
// console.log(over65)


// let ticket="";
// //CONDIZIONE
// if(age < 18){
//   ticket = under18;
//   document.getElementById('young').innerHTML = `
//   Ciao ${name}, <br> hai diritto a uno sconto del 20%! <br> Spenderai ${under18} anziché ${totalPrice}
//   `
// }else if ( age > 18 && age <65){
//   ticket = totalPrice;
//   document.getElementById('age-range').innerHTML = `
//   Ciao ${name}, il prezzo del tuo biglietto è di  ${totalPrice}.
//   `
// }

// if(age > 65){
//   ticket = over65;
//   document.getElementById('senior').innerHTML = `
//   Ciao ${name}, <br> hai diritto a uno sconto del 40%! <br> Spenderai ${over65} anziché ${totalPrice}
//   `
// }














// let ticket;
// const outputTicket = document.getElementById("output");
// console.log(outputTicket);

// //FIDELITY CARD
// const frecciaYoung = document.getElementById("young");
// console.log(frecciaYoung);
// const frecciaSenior = document.getElementById("senior");
// console.log(frecciaSenior);


// //PRICE TICKET
// const costPerKm       = 0.21,
//       kmTravel        = 300,
//       discountUnder18 = 20,
//       discountOver65  = 40,
//       ticketPrice     = (costPerKm * kmTravel);
// let   discountPrice   = 0,
//       totalPrice      = (ticketPrice - discountPrice);

// console.log(costPerKm, kmTravel, discountUnder18, discountOver65, ticketPrice, discountPrice, totalPrice);

// document.getElementById("button-1").addEventListener('click', function(){
// //FIRSTNAME
// const userFname = document.getElementById("firstname").value;
// console.log(userFname);
//  //LASTNAME
// const userLname = document.getElementById("lastname").value;
// console.log(userLname );
// //AGE
// const ageRange = document.getElementById("age").value;
// console.log(ageRange);

// //TOTAL PRICE
// // //PRICE TICKET

// if("ageRange === frecciaSenior "){{
// discountPrice = (ticketPrice) * (1 - discountOver65/100);
// totalPrice = (ticketPrice - discountPrice);
// console.log(discountPrice)
// }else if("ageRange === frecciaYoung "){
//  discountPrice = (ticketPrice) * (1 - discountUnder18/100);
// totalPrice = (ticketPrice - discountPrice);

// console.log(discountPrice)
// }
// //OUTPUT TICKET
// ticket = ` PASSEGGERO  <br> ${userFname} ${userLname} <br> TOTALE <br> ${discountPrice}
// `
// output.innerHTML = ticket;
// )};



