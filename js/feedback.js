var createInput = function () {
    var input = document.createElement('input');
    input.id = 'feedback';
    input.setAttribute('type', 'range');
    input.setAttribute('min', '1');
    input.setAttribute('max', '5');
    if (!localStorage.getItem('n')) {
        input.defaultValue = '5';
    } else {
        input.defaultValue = localStorage.getItem('n');
    }
    return input;
};

var feedback = function(){
    var parent = document.getElementsByClassName('suggestions')[0];
    var l = new Label('feedback', 'Cum ti s-a parut Puzzle-ul?');
    parent.insertBefore(x = l.createLabel(), parent.lastElementChild);
    var br = document.createElement('br');
    parent.insertBefore(br, parent.lastElementChild);
    x.style.fontSize = '0.8em';
    x.style.color = '#a1a1a1';
    x.style.fontVariant = 'small-caps';

    var input = createInput();
    input.style.marginTop = '15px';
    parent.insertBefore(input, parent.lastElementChild);

    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    var y = document.createElement('p');
    y.innerHTML = 'Doriti sa aflati noutati despre noi?';
    y.style.fontSize = '0.8em';
    y.style.color = '#a1a1a1';
    y.style.fontVariant = 'small-caps';
    parent.insertBefore(y, parent.lastElementChild);
    parent.insertBefore(checkbox, parent.lastElementChild);

    checkbox.onchange = function () {
        var p = document.createElement('p');
        p.innerHTML = 'Multumim pentru suport!';
        p.style.fontSize = '0.8em';
        p.style.color = '#a1a1a1';
        parent.replaceChild(p, checkbox);
    };

    input.onchange = function () {
        localStorage.setItem('n', input.value);
        var p = document.createElement('p');
        p.innerHTML = 'Multumim pentru feedback! Va asteptam din nou la Puzzles!';
        p.style.fontSize = '0.8em';
        p.style.color = '#a1a1a1';


        parent.replaceChild(p, input);
    };
};


