let ticket;
const outputTicket = document.getElementById("output");
console.log(outputTicket);

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
//KM
const kmTravel = document.getElementById("km-to-go").value;
console.log(kmTravel + 'km');
//OUTPUT TICKET
ticket = ` PASSEGGERO <br> ${userFname} ${userLname}
 `
 output.innerHTML = ticket;

})

