class Options  {
    constructor(height, width, bg, fontSize, textAlign = 'center') {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createBlock()   {
        let div = document.createElement('div');
        div.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rem sit laborum!';
        div.style.height = this.height;
        div.style.width = this.width;
        div.style.background = this.bg;
        div.style.fontSize = this.fontSize;
        div.style.textAlign = this.textAlign;
        document.body.prepend(div);
    }
}

let div1 = new Options('300px', '100%', 'red', '36px', 'center');
let div2 = new Options('150px', '100%', 'green', '24px');

