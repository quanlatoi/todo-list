/*
      <a id="add" href="#">
        <span><i class="fas fa-plus"></i></span>
        <span>Add New Card</span>
      </a>
      <a id="text" href="#" style="display: none;">
        <textarea placeholder="Nhập tiêu đề cho thẻ này..."></textarea>
        <input id="btn" type="button" value="Thêm thẻ">
        <div class="icon"></div>
      </a>
*/

class AddCard{
    constructor(nameId){
      this.nameId = nameId;
      this.a = document.createElement('a');
      this.a.setAttribute('class', this.nameId);
    }
  
  }
  
  class _addCard extends AddCard{
    constructor(nameId){
      super(nameId);
      this.span1 = document.createElement('span');
      this.span2 = document.createElement('span');
  
      this.span1.innerHTML = "<i class='fas fa-plus'>" + "</i>";
      this.span2.textContent = "Add New Card";
  
      this.a.appendChild(this.span1);
      this.a.appendChild(this.span2);
    }
  
  }
  
  /*
  <a id="text" href="#" style="display: none;">
    <textarea placeholder="Nhập tiêu đề cho thẻ này..."></textarea>
    <input id="btn" type="button" value="Thêm thẻ">
    <div class="icon"></div>
  </a>
  */
  
  class _createValue extends AddCard{
    constructor(nameId){
      super(nameId);
      this.a.classList.add('display');
      this.textarea = document.createElement('textarea');
      this.button = document.createElement('button');
      this.div = document.createElement('div');
  
      this.textarea.setAttribute('placeholder', 'Nhập tiêu đề cho thẻ này...');
      this.button.setAttribute('id', 'btn');
      this.button.setAttribute('type', 'button');
      this.button.textContent = 'Add Card';
      this.div.setAttribute('class', 'icon');
  
      this.a.appendChild(this.textarea);
      this.a.appendChild(this.button);
      this.a.appendChild(this.div);
  
    }
  }
  