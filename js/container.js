/*
  tạo khung:
      <div class="container">
      <div class="nameList">
        <p>List To Do</p>
      </div>
      <div class="listCard">
   ......  list cac tag vao day
      </div>
  .......  them task vao day
    </div>
*/
var dragElem = null;
class Container {
  constructor(nameContainer) {
    this.container = document.createElement('div');
    this.nameList = document.createElement('div');
    this.listCard = document.createElement('div');
    this.addCard = document.createElement('div'); 

    this.container.setAttribute('class', 'container');
    this.nameList.setAttribute('class', 'nameList');
    this.listCard.setAttribute('class', 'listCard');
    this.addCard.setAttribute('class', 'addCard');

    this.nameList.innerHTML = '<p>' + nameContainer + '</p>';

    this.container.appendChild(this.nameList);
    this.container.appendChild(this.listCard);
    this.container.appendChild(this.addCard);
    /*
              Event DnD
    */
    this.listCard.addEventListener('dragstart', this.dragStart, false);
    this.listCard.addEventListener('dragenter', this.dragEnter, false);
    this.listCard.addEventListener('dragover', this.dragOver, false);
    this.listCard.addEventListener('dragleave', this.dragLeave, false);
    this.listCard.addEventListener('drop', this.drop, false);

    this.listCard.addEventListener('click', this.showModal);
  }

  setposition(left) {
    this.container.style.left = left;
  }

  addNewTag(newTag) {
    this.listCard.appendChild(newTag);
  }

  addElementA(elementA) {    
    this.addCard.appendChild(elementA);
  }

  ///drag and drop
  dragStart(e) {
    var reversePath = e.path.reverse()
    dragElem = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', reversePath[7].outerHTML);
  }

  dragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    this.classList.remove('dragElem');
    this.classList.add('over');
    e.dataTransfer.dropEffect = 'move';

    return false;
  }

  dragEnter(e) {
    // this / e.target is the current hover target.
    //code in here 
  }

  dragLeave(e) {
    this.classList.add('dragElem');
    this.classList.remove('over');
  }

  drop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (dragElem != this) {
      let dropHTML = e.dataTransfer.getData('text/html');
      for (let i = 0; i < dragElem.querySelectorAll('.tag').length; i++) {
        let dom = dragElem.querySelectorAll('.tag')[i];
        if (dom.outerHTML === dropHTML) {
          dragElem.removeChild(dom);
        }
      }
      this.insertAdjacentHTML('beforeend', dropHTML);
    }
    dragElem.classList.remove('dragElem');    
    this.classList.remove('over');
    return false;
  }

  showModal(e){
    var modalContent = document.querySelector('.modal-content');
    var modal = document.querySelector('.modal');
    var title;
    if(e.target.classList[0] == 'father' || e.target.classList[0] == 'tag' || e.target.classList[0] == 'child1'){
      title = e.target.textContent;       
      let modal2 = new _ModalTitle(title);  
      modal.classList.remove('hide-modal');
      modalContent.appendChild(modal2.cardDetailWindow);
      modalContent.appendChild(modal2.closeBtn);
    }
  }
}

