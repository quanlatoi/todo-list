var dragSrcEl = null;
class Tag {
  constructor(id, content, orderID) {
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
    // this.a.setAttribute('draggable', 'true');
    // this.a.setAttribute('id', 'drag');
    this.span2.setAttribute('class', 'child2');
    this.span1.setAttribute('class', 'child1');
    this.span2.textContent = content;

    this.div.appendChild(this.a);
    this.a.appendChild(this.span1);
    this.a.appendChild(this.span2);

    //test
    this.div.setAttribute('draggable', 'true');
    this.div.setAttribute('order-id', orderID);

    this.div.addEventListener('dragstart', this.dragStart, false);
    this.div.addEventListener('dragover', this.dragOver, false);
    this.div.addEventListener('drop', this.drop, false);    
    this.div.addEventListener('dragend', this.dragEnd, false);    
  }

  dragStart(e){
    // this.className += " dragStartClass";
    dragSrcEl = this;
    
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  dragOver(e){
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  drop(e){    
    var listItems = document.querySelectorAll('.tag');
    
    var dragOrderId = parseInt(dragSrcEl.getAttribute('order-id'));
    var dragTargetOrderId = parseInt(this.getAttribute('order-id'));
    var tempThis = this;
    //Không làm bất cứ điều gì nếu thả xuống cùng 1 column mà ta đang kéo
    //và kiểm tra, nếu 1 điểm khác biệt thì sau đó sẽ không thực hiện

    if(dragSrcEl != this){
      var tempThis = this;
      function makeNewOrderIds(tempThis){
        dragSrcEl.setAttribute('order-id', dragOrderId);        
        tempThis.setAttribute('order-id', dragTargetOrderId);

        // tìm vị trí giữa 2 thẻ tag cũ và mới và set new ids
        // sự khác biệt trong khi di chuyển lên hoặc xuống (if - else)

        if(dragOrderId < dragTargetOrderId){
          for(var i = dragOrderId; i < dragTargetOrderId; i++){
            listItems[i].setAttribute("order-id", i);
            dragSrcEl.setAttribute('order-id', dragTargetOrderId);
          }
        }
        else{
          for(var i = dragTargetOrderId; i < dragOrderId; i++){
            listItems[i].setAttribute('order-id', i + 1);
            dragSrcEl.setAttribute('order-id', dragTargetOrderId);
          }
        }
      };
              
      function reOrder(listItems){
        var tempListItems = listItems;
        tempListItems = [].slice.call(listItems, 0);        
        tempListItems.sort(function(a, b){
          return a.getAttribute("order-id") - b.getAttribute("order-id");
        });
        var parent = document.querySelector('.listCard');
        // parent.innerHTML = "";
        for(var i = 0; i < tempListItems.length; i++){
          parent.appendChild(tempListItems[i]);    
        }          
      };
      
      makeNewOrderIds(tempThis);
      // dragSrcEl.classList.remove('dragStartClass');
      reOrder(listItems);
    }
  }
}
