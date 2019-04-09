class PopOver{
    constructor(){
        this.popOver = document.createElement('div');
        this.popOverChild = document.createElement('div');
        this.popOverContent = document.createElement('div');

        this.popOverHeader = document.createElement('div');
        this.spanHeader = document.createElement('span');

        this.spanHeader.textContent = 'Nhãn'; 

        this.aHeader = document.createElement('a');
        this.aHeader.setAttribute('id', 'closeLable');
        this.span = document.createElement('span');
        this.aHeader.classList.add('close-btn');

        this.popOverChild.classList.add('label-pop-over');
        this.popOverHeader.classList.add('header-pop-over');
        this.spanHeader.classList.add('header-pop-over-title')
        this.popOverContent.classList.add('popOver');
        this.span.classList.add('fas', 'fa-times');

        this.popOver.appendChild(this.popOverChild);
        this.popOverChild.appendChild(this.popOverHeader);
        this.popOverChild.appendChild(this.popOverContent);

        this.popOverHeader.appendChild(this.spanHeader);
        this.popOverHeader.appendChild(this.aHeader);
        this.aHeader.appendChild(this.span);

        this.aHeader.addEventListener('click', this.closeLabel);
    }

    closeLabel(e){
        var close = document.querySelector('#closeLable');
        var lable = document.querySelector('.a');
        if(e.target.parentNode.id == 'closeLable'){
            while(lable.firstChild){
                lable.firstChild.remove();
            }
            return;
        }
    }
}

class _popOverSelect extends PopOver{
    constructor(){
        super();
        this.ul = document.createElement('ul');
        this.ul.classList.add('edit-label-popover');
        this.popOverContent.appendChild(this.ul);
        this.iconCheck = document.createElement('span');
        this.iconCheck.classList.add('fas', 'fa-check', 'card-label', 'icon-sm', 'icon-check', 'selectable');

        //Green ('fas', 'fa-check', 'card-label', 'icon-sm', 'icon-check', 'selectable');
        this.li1 = document.createElement('li');
        this.a1 = document.createElement('a');
        this.span1 = document.createElement('span');
    
        this.ul.appendChild(this.li1);
        this.li1.appendChild(this.a1);
        this.li1.appendChild(this.span1);
        this.span1.classList.add('card-lable-green', 'card-label');
        
        //Orange
        this.li2 = document.createElement('li');
        this.a2 = document.createElement('a');
        this.span2 = document.createElement('span');

        this.ul.appendChild(this.li2);
        this.li2.appendChild(this.a2);
        this.li2.appendChild(this.span2);
        this.span2.classList.add('card-lable-orange', 'card-label');

        //Red
        this.li3 = document.createElement('li');
        this.a3 = document.createElement('a');
        this.span3 = document.createElement('span');
        this.ul.appendChild(this.li3);
        this.li3.appendChild(this.a3);
        this.li3.appendChild(this.span3);
        this.span3.classList.add('card-lable-red', 'card-label');

        //Purple
        this.li4 = document.createElement('li');
        this.a4 = document.createElement('a');
        this.span4 = document.createElement('span');
        this.ul.appendChild(this.li4);
        this.li4.appendChild(this.a4);
        this.li4.appendChild(this.span4);
        this.span4.classList.add('card-lable-purple', 'card-label');

        //Blue
        this.li5 = document.createElement('li');
        this.a5 = document.createElement('a');
        this.span5 = document.createElement('span');
        this.ul.appendChild(this.li5);
        this.li5.appendChild(this.a5);
        this.li5.appendChild(this.span5);
        this.span5.classList.add('card-lable-blue', 'card-label');

        //Blue-sky
        this.li6 = document.createElement('li');
        this.a6 = document.createElement('a');
        this.span6 = document.createElement('span');
        this.ul.appendChild(this.li6);
        this.li6.appendChild(this.a6);
        this.li6.appendChild(this.span6);
        this.span6.classList.add('card-lable-sky', 'card-label');

        //black
        this.li7 = document.createElement('li');
        this.a7 = document.createElement('a');
        this.span7 = document.createElement('span');
        this.ul.appendChild(this.li7);
        this.li7.appendChild(this.a7);
        this.li7.appendChild(this.span7);
        this.span7.classList.add('card-lable-black', 'card-label');

        //yellow
        this.li8 = document.createElement('li');
        this.a8 = document.createElement('a');
        this.span8 = document.createElement('span');
        this.ul.appendChild(this.li8);
        this.li8.appendChild(this.a8);
        this.li8.appendChild(this.span8);
        this.span8.classList.add('card-lable-yellow', 'card-label');

        this.ul.addEventListener('click', this.colorSelected);
    }

    colorSelected(e){
        const colorLable = document.querySelector('.color-lable');
        var labelSelected = e.target.classList[0];
        colorLable.classList.add(labelSelected);
        if(colorLable.classList.length > 2){
            colorLable.classList.add(labelSelected);
            colorLable.classList.remove(colorLable.classList[1]);
            return;
        }
    }
}