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

function btnClick() {
  var classListCard = document.querySelector('.listCard');
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
    //tạo thẻ span chứa icon;
    var span = document.createElement('span');
    a.appendChild(span);
    span.setAttribute('class', 'child1');
    //thẻ chứa tiêu đề
    var span2 = document.createElement('span');
    a.appendChild(span2);
    span2.setAttribute('class', 'child2');
    span2.innerHTML = text;
    //trả về giao diện thêm thẻ ban đầu
    var showAdd = document.getElementById('add');
    showAdd.removeAttribute('style', 'display: none');
    var hiddenText = document.getElementById('text');
    hiddenText.setAttribute('style', 'display: none');
    document.querySelector('textarea').value = '';
  }
}


document.getElementById('drag1').addEventListener('dragstart', drag);
for(const card of document.getElementsByClassName('listCard')){
    card.addEventListener('dragenter', dragEnter);
    card.addEventListener('dragleave', dragLeave);
    card.addEventListener('dragover', dragOver);
    card.addEventListener('drop', drop);
    card.addEventListener('dragend', dragEnd);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.dropEffect= 'move'
  ev.dataTransfer.setData('text', ev.target.id);
}

function dragEnd(ev){
    this.style= 'border: 2px solid black'
}

function dragEnter(ev){
  ev.preventDefault();
  this.style ='border: 2px solid red'
}

function dragLeave(ev){
  this.style = ''
}

function dragOver(ev){
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move"
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
}
