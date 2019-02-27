class Tag {
  constructor(id, content) {
    // <div class="tag">
    //     <a class="father" id='dragDemo2' href="#">
    //       <span class="child1"></span>
    //       <span class="child2">content</span>
    //     </a>
    // </div>

    this.div = document.createElement('div');
    this.a = document.createElement('a');
    this.span1 = document.createElement('span');
    this.span2 = document.createElement('span');

    this.div.setAttribute('class', id);
    this.a.setAttribute('class', 'father');
    this.a.setAttribute('draggable', 'true');
    // this.a.setAttribute('id', 'drag');
    this.span2.setAttribute('class', 'child2');
    this.span1.setAttribute('class', 'child1');
    this.span2.textContent = content;

    this.div.appendChild(this.a);
    this.a.appendChild(this.span1);
    this.a.appendChild(this.span2);

    this.a.addEventListener('dragstart', this.drag);
  }

  drag(ev) {
    ev.dataTransfer.dropEffect = 'move';
    ev.dataTransfer.setData('text', ev.target.id);
  }

}
