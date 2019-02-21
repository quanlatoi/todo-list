class Task {
    constructor(id, content){
        // <div class="tag">
        //     <a class="father" id='dragDemo2' href="#">
        //       <span class="child1"></span>
        //       <span class="child2">Demo1</span>
        //     </a>
        //   </div>

        this.component = document.createElement('div');
        this.spanChild = document.createElement('span');
        this.spanChild2 = document.createElement('span');
        this.a = document.createElement('a');
        
        this.component.setAttribute('class', 'tag');
        this.a.setAttribute('class', 'father');
        this.a.setAttribute('id', id);
        this.spanChild.setAttribute('class', 'child1');
        this.spanChild2.setAttribute('class', 'child2');
        this.spanChild2.innerText = content;

        this.component.appendChild(this.a);
        this.a.appendChild(this.spanChild);
        this.a.appendChild(this.spanChild2);
    }
    

    ganSukenchoTheA(){
        // this.a.addEvent..
    }
}