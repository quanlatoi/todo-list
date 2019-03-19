var divContain = document.querySelector('.contain');
//    khai báo các constructor    \\
var toDoContainer = new Container('To do');
var processContainer = new Container('Process');
var doneContainer = new Container('Done');
var newTag = new Tag('tag', 'demo', 1);
var idAdd = new _addCard('add');
var idText = new _createValue('text');
var popOver = new PopOver();

divContain.appendChild(toDoContainer.container);
divContain.appendChild(processContainer.container);
divContain.appendChild(doneContainer.container);
divContain.appendChild(popOver.popOver);
//  set vị trí cho các container  \\
toDoContainer.setposition('25px');
processContainer.setposition('350px');
doneContainer.setposition('675px');

toDoContainer.addNewTag(newTag.div);

toDoContainer.addElementA(idAdd.a);
toDoContainer.addElementA(idText.a);

// // Tạo thêm thẻ mới...
document.querySelector('.add').addEventListener('click', function() {
  showElement(idText.a);
  hiddenElemnt(idAdd.a);
  toDoContainer.addElementA(idText.a);
});
orderId = 1;
document.getElementById('btn').addEventListener('click', function() {
  var check = idText.textarea.value;
  orderId++;
  if (check.length > 0) {
    newTag = new Tag('tag', check, orderId);
    toDoContainer.addElementA(idAdd.a);
    toDoContainer.addNewTag(newTag.div);
    iconX();
  } else {
    alert('bạn chưa nhập tiêu đề thẻ!');
  }
});

document.querySelector('.icon').addEventListener('click', function() {
  iconX();
  toDoContainer.addElementA(idAdd.a);
});

function iconX() {
  hiddenElemnt(idText.a);
  showElement(idAdd.a);
  idText.textarea.value = "";
}

function showElement(element) {
  return element.classList.remove('display');
}

function hiddenElemnt(element) {
  return element.classList.add('display');
}
