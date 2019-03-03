var button = function (text) {
    let btt = document.createElement('button');
    btt.innerHTML = text;
    document.getElementById('buttonContainer').appendChild(btt);
    let mode = 0;
    /// mode = 0 -> dispar categ, mode = 1 -> reapar, mode =2 -> click pe alt buton
    btt.onclick = function (event) {
        let categories = document.querySelectorAll('section');
        if (mode === 0) {
            [].forEach.call(categories, function (ctg) {
                if (ctg.id != text) {
                    ctg.style.display = 'none';
                }
            });
            mode = 1;
        } else if (mode === 1) {
            [].forEach.call(categories, function (ctg) {
                ctg.style.display = 'block';
            });
        }
    };

    btt.style.height = '30px';
};

window.onload = function () {
    description();
    dropdownMenu();
    feedback();
    var buttonContainer = document.createElement('div');
    buttonContainer.id = 'buttonContainer';

    let menu = document.getElementsByClassName('menuContainer')[0];
    menu.appendChild(buttonContainer);
    buttonContainer.style.display = 'grid';
    buttonContainer.style.gridTemplateColumns = 'auto auto auto auto';
    buttonContainer.style.gridRow = '6';

    button('breakfast');
    button('lunch');
    button('dessert');
    button('drinks');
};


var dropdownMenu = function () {
    var dropdown = document.getElementsByClassName("dropdownButton");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }
};