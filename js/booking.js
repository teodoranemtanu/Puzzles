var createTextInput = function (type, id, name, placeholder, text) {
    var container = document.querySelector('#form');
    var input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('placeholder', placeholder);
    input.id = id;

    var l = new Label(id, text);
    container.appendChild(l.createLabel());
    container.appendChild(input);
    return input;
};

var createRadioInput = function () {
    var container = document.querySelector('#form');
    var p = document.createElement('p');
    p.innerHTML = 'Doriti rezervarea pentru cuplu sau pentru grup?';
    container.appendChild(p);

    var radio1 = document.createElement('input');
    radio1.setAttribute('type', 'radio');
    radio1.setAttribute('value', 'Cuplu');
    radio1.setAttribute('name', 'type');
    var x = document.createTextNode('Cuplu');
    container.appendChild(radio1);
    container.appendChild(x);
    container.innerHTML += '</br>';
    var radio2 = document.createElement('input');
    radio2.setAttribute('type', 'radio');
    var y = document.createTextNode('Grup');
    radio2.setAttribute('value', 'Grup');
    radio2.setAttribute('name', 'type');
    container.appendChild(radio2);
    container.appendChild(y);
};

function createDateInput() {
    var input = document.createElement('input');
    input.setAttribute('type', 'date');
    input.setAttribute('name', 'bookingDate');
    input.id = 'bookingDate';
    var container = document.querySelector('#form');
    container.innerHTML += '</br>';
    var l = new Label('bookingDate', 'Data rezervarii:');
    container.innerHTML += '</br>';
    container.appendChild(l.createLabel());
    container.appendChild(input);
    return input;
}


window.onload = function () {
    description();
    feedback();
    var fname = createTextInput('text', 'fname', 'firstname', 'Introdu prenumele tau', 'Prenume');
    var lname = createTextInput('text', 'lname', 'lastname', 'Intronu numele tau', 'Nume');
    createRadioInput();
    var radio = document.querySelectorAll('input[type=radio]');
    [].forEach.call(radio, function (r) {
        r.onchange = function () {
            r.setAttribute('checked', true);
            if (r.value == 'Grup') {
                var input = document.createElement('select');
                input.id = 'count';
                for (let i = 3; i <= 8; i++) {
                    var opt = document.createElement('option');
                    opt.text = i.toString();
                    input.add(opt, input[0]);
                }
                document.getElementById('form').innerHTML += '</br>';
                document.getElementById('form').appendChild(input);
                input.onchange = function () {
                    var date = createDateInput();
                    date.onblur = function () {
                        var myDate = new Date(date.value);
                        console.log(myDate);
                        var currentDate = new Date();
                        if (myDate < currentDate) deschide_fer();
                        else {
                            var textarea = createTextarea();
                            emptyTextarea();
                            appendCharToTextarea();
                            createTables();
                        }
                    }
                }
            } else if (r.value == 'Cuplu') {
                var date = createDateInput();
                date.onblur = function () {
                    var myDate = new Date(date.value);
                    var currentDate = new Date();
                    if (myDate < currentDate) alert('Introduceti o data valida!');
                    else {
                        var textarea = createTextarea();
                        appendCharToTextarea();
                        emptyTextarea();
                        createTables();
                    }
                }
            }
        }
    });
};

function appendCharToTextarea() {
    document.body.addEventListener('keyup', function (event) {
        var newChar = String.fromCharCode(event.keyCode);
        var displayable = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXWYZ1234567890';
        if (displayable.includes(newChar))
            document.getElementsByTagName('textarea')[0].value += newChar;

    }, false);
}

function emptyTextarea() {
    document.getElementsByTagName('textarea')[0].onclick = function (event) {
        if (event.ctrlKey) {
            document.getElementsByTagName('textarea')[0].value = '';
        }
    };
}

function createTextarea() {
    var l = new Label('additionalInfo', 'Informatii aditionale pentru rezervare:');
    var container = document.querySelector('#form');
    container.appendChild(document.createElement('br'));
    container.appendChild(x = l.createLabel());
    var input = document.createElement('textarea');
    input.id = 'additionalInfo';
    container.appendChild(input);
    return input;
}

function deschide_fer() {
    fer = open("", "_blank", "width=400, height=200");
    fer.document.write('Introduceti o data valida!');
}

