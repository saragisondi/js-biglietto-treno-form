let ticket;
const outputTicket = document.getElementById("output");
console.log(outputTicket);

//FIDELITY CARD
const frecciaYoung = document.getElementById("young");
console.log(frecciaYoung);
const frecciaSenior = document.getElementById("senior");
console.log(frecciaSenior);


//PRICE TICKET
const costPerKm       = 0.21,
      kmTravel        = 300,
      discountUnder18 = 20,
      discountOver65  = 40,
      ticketPrice     = (costPerKm * kmTravel);
let   discountPrice   = 0,
      totalPrice      = (ticketPrice - discountPrice);

console.log(costPerKm, kmTravel, discountUnder18, discountOver65, ticketPrice, discountPrice, totalPrice);

document.getElementById("button-1").addEventListener('click', function(){
//FIRSTNAME
const userFname = document.getElementById("firstname").value;
console.log(userFname);
 //LASTNAME
const userLname = document.getElementById("lastname").value;
console.log(userLname );
//AGE
const ageRange = document.getElementById("age").value;
console.log(ageRange);

//TOTAL PRICE
// //PRICE TICKET
if("ageRange = frecciaYoung "){
 discountPrice = ticketPrice * (discountUnder18/100);
}else if("ageRange = frecciaSenior "){
discountPrice = ticketPrice * (discountOver65/100);
}

totalPrice = (ticketPrice - discountPrice);

//OUTPUT TICKET
ticket = ` PASSEGGERO <br> ${userFname} ${userLname} <br> TOTALE <br>  ${totalPrice}
`
output.innerHTML = ticket;

});



