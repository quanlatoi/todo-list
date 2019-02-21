var listCard = document.querySelector('.listCard');
var addCard = document.getElementById('add');
var text = document.getElementById('text');
var iconX = document.querySelector('.icon');
var btn = document.getElementById('btn');
var textContent = document.querySelector('textarea');

addCard.addEventListener('click', function(){
  hiddenElemnt(add);
  showElement(text);
});

iconX.addEventListener('click', funIconX);

btn.addEventListener('click', function(){
  var content = textContent.value;
  if(content.length > 0){
    createA();
    funIconX();
  }
});

function showElement(element){
  return element.removeAttribute('style', 'display: none');
}

function hiddenElemnt(element){
  return element.setAttribute('style', 'display: none');
}

function funIconX(){
  hiddenElemnt(text);
  showElement(add);
  textContent.value = '';
}


function createSpanText(){
  var content = textContent.value;
  var spanText =  document.createElement('span');
  spanText.setAttribute('class', 'child2');
  spanText.textContent = content;
  return spanText;
}

function createSpan(){
  var span = document.createElement('span');
  span.setAttribute('class', 'child1');
  return span;
}

function createA(){
  var a = document.createElement('a');
  a.setAttribute('class', 'father');
  a.setAttribute('href', '#');
  a.setAttribute('draggable', 'true');
  a.appendChild(createSpanText());
  a.appendChild(createSpan());
  createDiv().appendChild(a);
  a.addEventListener('dragstart', drag);
  return a;
}

function createDiv(){
  var div = document.createElement('div');
  div.setAttribute('class', 'tag');
  return listCard.appendChild(div);
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
