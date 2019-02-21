class Container {
    constructor(nameContainer) {
        //     <div class="toDo a">
        //     <div class="nameList">
        //       <p>List To Do</p>
        //     </div>
        //     <div class="listCard">
        //  ......  list cac tag vao day
        //     </div>
        // .......  them task vao day
        //   </div>

        this.component = document.createElement('div');
        this.nameList = document.createElement('div');
        this.listCard = document.createElement('div');

        this.component.setAttribute('class', 'container');
        this.nameList.setAttribute('class', 'nameList');
        this.nameList.innerHTML = '<p>' + nameContainer + '</p>'
        this.listCard.setAttribute('class', 'listCard');

        this.component.appendChild(this.nameList);
        this.component.appendChild(this.listCard);
    }

    setLeftPosition(left){
        this.component.style.left = left;
    }

    //add 1 task
    //lan sau chi can this.addTask(new Task(...));  la duoc
    addTask(newTask){
        // this.listCard.appendChild(newTask)
    }
}