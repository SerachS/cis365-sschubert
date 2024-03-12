/* define your functions here */
function calculateTotal(quantity, price)
{
    return (quantity*price);
}
function outputCartRow(item = "Portrait of Marten Soolmans", total) 
{

    let picture = item.product.filename;
    document.write('<td><img src = images/' + picture + ' ></td>');
    document.write('<td>' + item.product.title + '</td>');
    document.write('<td>' + total + '</td>');
    price = (item.product.price).toFixed(2);
    document.write('<td>' + price + '</td>');
    calcTotal = (calculateTotal(total,item.product.price)).toFixed(2);
    document.write('<td>' + calcTotal + '</td>');
}









        
