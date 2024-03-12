
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */
let subtotal = 0;
let shipping = 0;
   for (let row of cart)
{
   document.write('<tr>');
   outputCartRow(row, row.quantity);
   document.write('</tr>');
   subtotal+= calculateTotal(row.quantity,row.product.price);
}
if (subtotal > shipping_threshold)
{
   shipping = 0;
}
else
{
   shipping = 40;
}

let tax = subtotal * tax_rate;
let grandTotal = subtotal + shipping + tax;

document.write('<tr class = "totals">');
document.write('<td colspan = "4">' + "Subtotal: " + '<td/');
document.write('<td>' + "$" + subtotal.toFixed(2) + '</td>');
document.write('</tr>');

document.write('<tr class = "totals">');
document.write('<td colspan = "4"> ' + "Tax: " + '<td/');
document.write('<td>'+ "$" + tax.toFixed(2) + '</td>');
document.write('</tr>');

document.write('<tr class = "totals">');
document.write('<td colspan = "4"> ' + "Shipping: " + '<td/');
document.write('<td>'+ "$" + shipping.toFixed(2) + '</td>');
document.write('</tr>');

document.write('<tr class = "totals">');
document.write('<td colspan = "4" class="focus"> ' + "Grand Total: " + '<td/');
document.write('<td class="focus">'+ "$" + grandTotal.toFixed(2) + '</td>');
document.write('</tr>');



