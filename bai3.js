//tìm và sửa lại các QUERYSELECTOR, có thể thay bằng id hoặc className
//lên ý tưởng lại cho phần kéo thả
//lên ý tưởng cho phần tạo thẻ div a tạm thời.


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
  });
});
var idName = 1;
function btnClick() {
  var classListCard = document.querySelector('.listCard');
  idName++;
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
    a.setAttribute('id', 'drag'+idName);
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
}

function getElement(ev) {

}

document.getElementById('drag1').addEventListener('dragstart', drag);
for(const card of document.getElementsByClassName('listCard')){
    card.addEventListener('dragenter', dragEnter);
    card.addEventListener('dragleave', dragLeave);
    card.addEventListener('dragover', dragOver);
    card.addEventListener('drag', drag);
    card.addEventListener('drop', drop);
    card.addEventListener('dragend', dragEnd);
}

function drag(ev) {
  ev.dataTransfer.dropEffect= 'move';
  ev.dataTransfer.setData('text', ev.target.id);
}

function dragEnter(ev){
  ev.preventDefault();
  if(ev.target.className === 'listCard' || ev.target.className === 'tag'){
    // $('.tag').clone().appendTo('#abc');
  }
}

function dragLeave(ev){

}

function dragOver(ev){
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  var reversePath = ev.path.reverse();
/*
  Nếu div không có giá trị tag thì sẽ thêm vào div với class tag
*/
  var check = document.getElementsByClassName('listCard');
  if(ev.target.className !== 'tag'){
    let newDiv = document.createElement('div');
    reversePath[6].appendChild(newDiv);
    newDiv.setAttribute('class', 'tag');
    newDiv.appendChild(document.getElementById(data));
  }
}

function dragEnd(ev){
  var a = document.getElementsByClassName('tag');
/* tìm trong mảng các .tag
  nếu giá trị lastElementChild của .tag đó mà null thì xóa
*/
  for(let i = 0; i < a.length; i++){
    if(a[i].lastElementChild === null){
      a[i].remove();
    }
  }
}
//tìm và sửa lại các QUERYSELECTOR, có thể thay bằng id hoặc className
//lên ý tưởng lại cho phần kéo thả
//lên ý tưởng cho phần tạo thẻ div a tạm thời.


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
  });
});
var idName = 1;
function btnClick() {
  var classListCard = document.querySelector('.listCard');
  idName++;
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
    a.setAttribute('id', 'drag'+idName);
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
}

function getElement(ev) {

}

document.getElementById('drag1').addEventListener('dragstart', drag);
for(const card of document.getElementsByClassName('listCard')){
    card.addEventListener('dragenter', dragEnter);
    card.addEventListener('dragleave', dragLeave);
    card.addEventListener('dragover', dragOver);
    card.addEventListener('drag', drag);
    card.addEventListener('drop', drop);
    card.addEventListener('dragend', dragEnd);
}

function drag(ev) {
  ev.dataTransfer.dropEffect= 'move';
  ev.dataTransfer.setData('text', ev.target.id);
}

function dragEnter(ev){
  ev.preventDefault();
  if(ev.target.className === 'listCard' || ev.target.className === 'tag'){
    // $('.tag').clone().appendTo('#abc');
  }
}

function dragLeave(ev){

}

function dragOver(ev){
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  var reversePath = ev.path.reverse();
/*
  Nếu div không có giá trị tag thì sẽ thêm vào div với class tag
*/
  var check = document.getElementsByClassName('listCard');
  if(ev.target.className !== 'tag'){
    let newDiv = document.createElement('div');
    reversePath[6].appendChild(newDiv);
    newDiv.setAttribute('class', 'tag');
    newDiv.appendChild(document.getElementById(data));
  }
}

function dragEnd(ev){
  var a = document.getElementsByClassName('tag');
/* tìm trong mảng các .tag
  nếu giá trị lastElementChild của .tag đó mà null thì xóa
*/
  for(let i = 0; i < a.length; i++){
    if(a[i].lastElementChild === null){
      a[i].remove();
    }
  }
}
