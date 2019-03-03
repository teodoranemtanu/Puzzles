class Label {
    constructor(ftext, text) {
        this.ftext = ftext;
        this.text = text;
    };

    createLabel() {
        var l = document.createElement('label');
        l.setAttribute('for', this.ftext);
        l.innerHTML = this.text;
        return l;
    }
}
