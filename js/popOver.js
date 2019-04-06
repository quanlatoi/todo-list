class PopOver{
    constructor(){
        this.popOver = document.createElement('div');
        this.popOverChild = document.createElement('div');
        this.popOverHeader = document.createElement('div');
        this.popOverContent = document.createElement('div');

        this.popOver.appendChild(this.popOverChild);
        this.popOverChild.appendChild(this.popOverHeader);
        this.popOverChild.appendChild(this.popOverContent);
    }
}

class _popOverContent{
    constructor(){
        this.a
    }
}