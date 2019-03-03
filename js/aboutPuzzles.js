var description= function(){
    var newDiv = document.createElement('div');
    var parent = document.getElementsByClassName('aboutPuzzles')[0];
    newDiv.style.display = 'none';
    let txt = 'Te intrebi de ce ne numim Puzzles? Tocmai acesta este puzzle-ul';
    newDiv.appendChild(document.createTextNode(txt));

    parent.onmouseenter = function (event) {
        parent.appendChild(newDiv);
        newDiv.classList.add('menuHover');
        newDiv.style.position = 'absolute';
        newDiv.style.display = 'block';
        newDiv.style.left = (event.clientX - 100) + 'px';
        newDiv.style.top = (event.clientY - 200) + 'px';
    };

    parent.onmouseleave = function (){
      parent.removeChild(newDiv);
    };

    console.log(newDiv);
};
