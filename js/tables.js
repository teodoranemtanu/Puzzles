countMovedChildren = 0;

class Position {
    constructor(a, b) {
        this.x = a;
        this.y = b;
    }
}

var positions = [];

var createTables = function () {
    var parent = document.createElement('div');
    var container = document.querySelector('#form');
    var p = document.createElement('p');
    p.innerHTML = 'Acestea sunt mesele pe care le avem disponibile! Alegeti una.';
    container.appendChild(p);
    parent.id = 'restaurant';
    container.appendChild(parent);
    tables();

    var timeoutId = window.setTimeout(function () {
        var intervalId = window.setInterval(function () {
            if (parent.children.length) {
                parent.removeChild(parent.children[0]);
            } else {
                clearInterval(intervalId);
            }
        }, 2000);
    }, 20000);

};

function createDivs(n) {
    for (let i = 0; i < n; i++) {
        var newDiv = document.createElement('div');
        var parent = document.getElementById('restaurant');
        var parentStyle = window.getComputedStyle(parent, null);
        parent.appendChild(newDiv);
        newDiv.classList.add('table');
        let a = new Position(getRndInteger(1, 15), getRndInteger(1, 15));
        let ok = false;
        while (ok == false) {
            ok = true;
            let a = new Position(getRndInteger(1, 15), getRndInteger(1, 15));
            for (let i = 0; i < positions.length; i++) {
                if (a.x == positions[i].x && a.y == positions[i].y) {
                    break;
                }
            }
            if (ok == true) {
                positions.push(a);
                newDiv.style.gridRow = a.x.toString();
                newDiv.style.gridColumn = a.y.toString();
            }
        }
    }
}

var tables = function () {
    var n = 15;
    createDivs(n);

    var childrenDivs = document.querySelectorAll('.table');
    console.log(childrenDivs);
    for (let i = 0; i < childrenDivs.length; i++) {
        childrenDivs[i].onclick = function () {
            var activeDivs = document.querySelectorAll('.selected');
            [].forEach.call(activeDivs, function (div) {
                div.classList.remove('selected');
            });
            childrenDivs[i].classList.add('selected');

            var input = document.createElement('input');
            input.setAttribute('type', 'submit');
            document.getElementById('form').appendChild(document.createElement('br'));
            document.getElementById('form').appendChild(input);
            input.onclick = function () {
                alert('Ati rezervat masa cu succes!')
            }
        };
    }

};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}