/* test your knowlege3 */
// let bill =prompt("what is the bill total?");
// let ibill=Number(bill);

// const TIP_PRECENTAGE= 0.10;
// let tip = ibill * TIP_PRECENTAGE;



// if (ibill && ibill != 0)
// {
//     console.log("For bill of $" + bill + " the tip should be $" + tip);//concatenation
//     //console.log(`For bill of $${bill} the tip should be $${tip}`);
// }
// else{
//     console.log(`${bill} is not a valid number`); //interpolation
// }

const billTotals = [50.00,150.00,20.00,500.00];
const tips = [];

for(let total of billTotals)
{
    let tip;
    if(total < 30)
    {
        tip = total * 0.30;
    }
    else if(total >= 30 && total <= 75)
    {
        tip = total * 0.20;
    }
    else
    {
        tip = total * 0.10;
    }
    tips.push(tip);
   // tip = total < 30 ? total * 0.30 : total * 0.10; 
}
for (let i = 0; i < billTotals.length; i++)
{
    console.log("For bill of $" + billTotals[i] + " the tip should be $" + tips[i]);
}
