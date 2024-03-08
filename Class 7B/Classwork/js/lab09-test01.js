/* add code after this comment */

// console.log(document.getElementById('tumb-list'));
// console.log(`MANY: `);
// console.log(document.getElementsByClassName('thumb'));
// console.log(`FIRST: `);
// console.log(document.getElementsByClassName('thumbs')[0]);
console.log(document.getElementById('thumb-list'));
document.getElementById('thumb-list').style.border="solid 1px #CCCCCC";
document.querySelector('#msg').value = document.querySelector('.box fieldset p').textContent;
// document.querySelector('.box fieldset p');

const images = document.querySelectorAll('#thumb-list img');
for(let image of images)
{
    image.style.boxShadow = "6px 5px 20px 1px rgba(0,0,0,0.22)";
}

//const d = document.querySelector('#msg');
//d.insertAdjacentText("HELLO AGAIN");
// d.innerHTML = '<h2>HELLO WORLD</h2>';
// dispatchEvent.innerHTML = '<a href = "#"><img src = "ab.git" ></a>';