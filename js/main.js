/* // Selecting DOM
const submit = document.getElementById('submit');
const result = document.getElementById('result');
// Function
function binary(e) {
    e.preventDefault();
    const num = document.getElementById('number').value;
    // Input validation
    if (num === '') {
        alert('Please enter a number');
    } else if (num < 0) {
        alert('Please enter a positive number');
    } else {
        result.style.visibility = 'visible';
    }
    //Converting to Binary
    let binary = Number(num).toString(2);
    result.innerHTML = binary;
}
// Event Listener
submit.addEventListener('click', binary); */

function func() {
    const result = document.getElementById('showresult');
    const num = document.getElementById('number').value;
    let binaryy = Number(num);

        if (num === '' ) {
            alert('input is empty');
        } else if (num < 0) {
            alert('input a positive number');
        } else {
            binaryy = binaryy.toString(2);
            result.innerHTML = binaryy;
        }
    return document.getElementById('result').innerHTML = binaryy;
}

