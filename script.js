// var number = document.querySelector('#box');
// // console.log(number);
// for (let i = 0; i<100; i++){
//     var span = document.createElement('span');
//     span.textContent = i;
//     number.appendChild(span);
// }
// var tag = number.getElementsByTagName('span');
// // console.log(tag);
// var index = 0;

// function nextNum(){
//     tag[index].style.display= 'none';
//     index = (index + 1) % tag.length;
//     tag[index].style.display = 'inline';
// }
// console.log(nextNum());

var number = document.querySelector('#box'); // This selects the HTML element with the ID 'box'.

    for (let i = 0; i < 100; i++) {
        var span = document.createElement('span'); // This creates a 'span' element.
        span.textContent = i; // This sets the text content of the 'span' element to the value of 'i'.
        number.appendChild(span); // This appends the 'span' element to the 'box' element.
    }

    var tag = number.getElementsByTagName('span'); // This gets all the 'span' elements within the 'box' element.
    var index = 0; // This initializes the index to 0.

    function nextNum() {
        tag[index].style.display = 'none'; // This hides the 'span' element at the current index.
        index = (index + 1) % tag.length; // This increments the index and wraps it back to 0 if it reaches the end.
        tag[index].style.display = 'inline'; // This displays the 'span' element at the updated index.
    }
