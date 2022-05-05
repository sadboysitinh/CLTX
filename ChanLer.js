let MIT = '';
let mobat = document.querySelector('.mobat');
let bat = document.querySelector('.bat');
let xacDia = document.querySelector('.xac-dia');
let dotteds = document.querySelectorAll('.cham-tron');
let inkq = document.querySelectorAll('.inkq');

let rannum = () => {
    var sum = 0;

    for (let i = 0; i <= 10; i++) {
        sum = Math.floor(Math.random() * 2) + 1;
    }

    return sum % 10;
}

let setColors = (element, value) => {
    var colors = value == 1 ? 'orangered' : 'gray';
    element.style.backgroundColor = colors;
}

let inresults = () => {
    var n = [];

    for (var i = 0; i <= 3; i++) {
        n.push(rannum());
    }

    for (var i = 0; i < n.length; i++) {
        setColors(dotteds[i], n[i]);
    }

    var one = 0, two = 0;

    for (var i = 0; i < n.length; i++) {
        n[i] == 1 ? one++ : n[i] == 2; two++;
    }

    KQ = one == 1 || one == 3 ? 'LẺ' : 'CHẴN';

    return KQ;

}

xacDia.onmouseup = () => {

    mobat.disabled = 'true';

    inkq[0].style.backgroundColor = '#1e1e1e';
    inkq[1].style.backgroundColor = '#1e1e1e';

    bat.style.width = '350px';
    bat.style.height = '350px';
    bat.style.display = 'block';

    MIT = inresults();

    mobat.disabled = '';
    bat.style.backgroundColor = 'white';
}

mobat.onmouseup = () => {
    bat.style.width = '0px';
    bat.style.height = '0px';

    if (MIT == 'LẺ')
        inkq[1].style.backgroundColor = 'yellow';
    else
        inkq[0].style.backgroundColor = 'yellow';


    setTimeout(() => {
        bat.style.display = 'none';
    }, 200);
}

