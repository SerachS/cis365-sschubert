/* add code below this */
let bill =prompt("what is the bill total?");
let ibill=Number(bill);

const TIP_PRECENTAGE= 0.10;
let tip = ibill * TIP_PRECENTAGE;



if (ibill && ibill != 0)
{
    console.log("For bill of $" + bill + " the tip should be $" + tip);//concatenation
    //console.log(`For bill of $${bill} the tip should be $${tip}`);
}
else{
    console.log(`${bill} is not a valid number`); //interpolation
}