'use strict';
/* print conversion table
   fahrenheit to celsius */
const c2f = function () {
    let fahr;
    let celsius;

    let lower = 0;                       // define constants
    let upper = 300;
    let step = 20;

    let s = '<table>';
    s += '<tr><th>Celsius</th><th>Fahrenheit</th></tr>';
    fahr = lower;
    while (fahr <= upper) {
        celsius = 5 / 9 * (fahr - 32);   // the conversion formula
        s += `<tr><td>${celsius}</td><td>${fahr}</td></tr>`;
        fahr = fahr + step;
    }
    s += '</table>';
    return s;
}