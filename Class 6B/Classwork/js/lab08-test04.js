
// convert comma-separated values into an array

let countries = csv.split(',');
console.log(countries);
// convert array into delimited string
let joinedCountries = countries.join();
console.log(joinedCountries);

// check if these are arrays
console.log(Array.isArray(countries));
console.log(Array.isArray(joinedCountries));

//  sort a simple array 
countries.sort()
console.log(countries);

// reverse the sort
countries.reverse()
console.log(countries);

// remove the first element
countries.shift();
console.log(countries);

// remove the last element

countries.pop();
console.log(countries);

// add new elements to the front of the array

countries.unshift("Israel","Japan");
console.log(countries);
// search for element

console.log(countries.includes("Germany"));
// search for element index
console.log(countries.indexOf("Germany"));

// make a new array by extracting from another array
let newCountries = countries.splice(0,6);

console.log(newCountries);

// there are other array methods which you will learn in Ch 10 */


// use a loop to output all cities whose continent=="NA"
for (let city of cities)
{
   if (city.continent == "NA")
   {
      console.log(city);
   }
}

console.log('---------------------');

// use a loop to output gallery names whose country=="USA"
for (let gallery of galleries)
{
   if (gallery.location.country == "USA")
   {
      console.log(gallery.name);
   }
}

console.log('---------------------');

// convert JSON colorsAsString to js object
const colors = JSON.parse(colorsAsString);

// use a loop to output color name if luminance < 75
for (let color of colors)
{
   if (color.luminance < 75)
   {
      console.log(color.name);
   }
}

console.log('---------------------');

// use two nested loops - outer: loop thru colors

for (let c of colors)
{
   let sum = 0;
   for (let rgb of c.rgb)
   {
      sum += rgb;
   }
   console.log(c.name + "rgb="+sum)
}
console.log('---------------------');

/* use a loop output using document.write a unordered
   list of links to the galleries in the galleries array.
   Make the label of the link the name property, and the href
   the url property */
document.write(`<h2>Hello World</h2>`);
const firstItem = "First Item";
document.write(`<li>${firstItem}</li>1`);
document.write(`</ul>`);

function foo(a=10,b=0)
{
   return a+b;
}
console.log(foo(3));



