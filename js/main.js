function func() {
    const result = document.getElementById('showresult');
    const num = document.getElementById('number').value;
    let binaryy = Number(num);

        if (num === '' ) {
            alert('input is empty');
        } else if (num < 0) {
            alert('input a positive number');
        } else if (isNaN(num)) {
            alert('We accept only numeral numbers');
        }  else {
            binaryy = binaryy.toString(2);
            result.innerHTML = binaryy;
        }
    return document.getElementById('result').innerHTML = binaryy;
}

