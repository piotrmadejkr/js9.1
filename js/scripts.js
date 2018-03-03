// scripts.js
var a = prompt('podaj a');
var h = prompt('podaj h');
function getTriangleArea(z,c) {
    if (z,c) {
        if (z<=0) {
           alert('wprowadz poprawne dane');
        }
        else if (c<=0) {
            alert('wprowadz poprawne dane');
        }
        else {
            return z*c/2;
        }  
    }
}
var triangle = getTriangleArea(a,h); 
alert('wynik');
alert(triangle);
