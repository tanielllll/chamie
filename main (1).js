const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("Ano name mo Larr?");
    
    if(n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "Ty Bitch";
    }

    if (n.length > 0) {
        alert("Date tayo");
        alert('Lomi tayo?');
        alert("Chami na lang? " + n + '?');
        main.style.display = 'block';
        break;
    }
}