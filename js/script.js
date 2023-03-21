let ticket;
const outputTicket = document.getElementById("output");
console.log(outputTicket);

//FIDELITY-CARD
document.getElementById("invia").addEventListener('click', function(){
  //FRECCIA-YOUNG
  const under18 = document.getElementById("young").value;
  console.log(under18);
  //FRECCIA-SENIOR
  const over65 = document.getElementById("senior").value;
  console.log(over65);
})

//PRICE TICKET
const costPerKm       = 0.21,
      kmTravel        = 300,
      discountUnder18 = 20,
      discountOver65  = 40,
      ticketPrice     = (costPerKm * kmTravel);
let  discountPrice   = 0;
let totalPrice = 0;

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
if("ageRange < 18"){
 discountPrice = ticketPrice * discountUnder18/100;
}else if("ageRange > 65"){
discountPrice = ticketPrice * discountOver65/100;
}

// //TOTAL PRICE TICKET
totalPrice = ticketPrice - discountPrice;
console.log(totalPrice);


//OUTPUT TICKET
ticket = ` PASSEGGERO <br> ${userFname} ${userLname} <br> TOTALE <br>  ${totalPrice}
`
output.innerHTML = ticket;

});



