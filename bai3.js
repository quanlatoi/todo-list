
var addCard = document.getElementById('add');
addCard.addEventListener('click', function() {
  var showTextArea = document.getElementById('add');
  showTextArea.setAttribute('style', 'display: none');
  var hiddenAdd = document.getElementById('text');
  hiddenAdd.removeAttribute('style', 'display: block');
  var btn = document.getElementById('btn');
  //add event cho thẻ input button
  btn.addEventListener('click', btnClick);
  //add event cho thẻ div chứa icon X
  var iconX = document.querySelector('.icon');
  iconX.addEventListener('click', function() {
    var showAdd = document.getElementById('add');
    showAdd.removeAttribute('style', 'display: none');
    var hiddenText = document.getElementById('text');
    hiddenText.setAttribute('style', 'display: none');
    document.querySelector('textarea').value = '';
  });
});
var idName = 1;

function btnClick() {
  var classListCard = document.querySelector('.listCard');
  idName++;
  var idUseDrag = 'drag' + idName;
  //tạo thẻ div
  var text = document.querySelector('textarea').value;
  if (text.length > 0) {
    var div = document.createElement('div');
    classListCard.appendChild(div);
    div.setAttribute('class', 'tag');
    // tạo thẻ a
    var a = document.createElement('a');
    div.appendChild(a);
    a.setAttribute('class', 'father');
    a.setAttribute('href', '#');
    a.setAttribute('id', idUseDrag);
    a.setAttribute('draggable', 'true');
    //tạo thẻ span chứa icon;
    var span = document.createElement('span');
    a.appendChild(span);
    span.setAttribute('class', 'child1');
    //thẻ chứa tiêu đề
    var span2 = document.createElement('span');
    a.appendChild(span2);
    span2.setAttribute('class', 'child2');
    span2.textContent = text;
    //trả về giao diện thêm thẻ ban đầu
    var showAdd = document.getElementById('add');
    showAdd.removeAttribute('style', 'display: none');
    var hiddenText = document.getElementById('text');
    hiddenText.setAttribute('style', 'display: none');
    document.querySelector('textarea').value = '';
  }
  document.getElementById('drag' + idName).addEventListener('dragstart', drag);
}

document.getElementById('dragDemo1').addEventListener('dragstart', drag);
document.getElementById('dragDemo2').addEventListener('dragstart', drag);
document.getElementById('dragDemo3').addEventListener('dragstart', drag);
for (const card of document.getElementsByClassName('listCard')) {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragleave', dragLeave);
  card.addEventListener('dragover', dragOver);
  card.addEventListener('drag', drag);
  card.addEventListener('drop', drop);
  card.addEventListener('dragend', dragEnd);
}


function dragStart(ev) {
  ev.dataTransfer.setData("text/plain", ev.target.id);
}

function drag(ev) {
  ev.dataTransfer.dropEffect = 'move';
  ev.dataTransfer.setData('text', ev.target.id);
}

function dragLeave(ev) {
  this.style = 'transition: 0.5s';
  ev.dataTransfer.dropEffect = 'move';
}

function dragOver(ev) {

  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
  var a = document.getElementsByClassName('a');
  this.style = 'padding: 0 0 30px 0; background: rgb(209, 209, 209); transition: 0.3s linear';
  return false;
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
/*
    Luôn xuất hiện dưới tag trước đó
*/
  var reversePath = ev.path.reverse();
  let newDiv = document.createElement('div');
  reversePath[6].appendChild(newDiv);
  newDiv.setAttribute('class', 'tag');
  newDiv.appendChild(document.getElementById(data));
}

function dragEnd(ev) {
  var checkTag = document.getElementsByClassName('tag');
  /* tìm trong mảng các .tag
    nếu giá trị lastElementChild của .tag đó mà null thì xóa
  */
  for (var i = 0; i < checkTag.length; i++) {
    if (checkTag[i].lastElementChild === null) {
      checkTag[i].remove();
    }
  }
  this.style = '';
}
