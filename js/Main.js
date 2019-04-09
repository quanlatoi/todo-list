var divContain = document.querySelector('.contain');

//data gửi về từ server
var data = [
  {
    id: 1,
    tagName: 'về nhà làm nốt chức năng thêm màu nhãn + chức năng add bình luận + hiển thị bình luận bên dưới!'
  }
];
var obj = {};

//    khai báo các constructor    \\
var toDoContainer = new Container('To do');
var processContainer = new Container('Process');
var doneContainer = new Container('Done');
var newTag = new Tag('tag', data[0].tagName);
var idAdd = new _addCard('add');
var idText = new _createValue('text');

divContain.appendChild(toDoContainer.container);
divContain.appendChild(processContainer.container);
divContain.appendChild(doneContainer.container);
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
  var content = idText.textarea.value;
  if (content.length > 0) {
    obj['id'] = orderId++;
    obj['tagName'] = content;
    data.push(obj);
    newTag = new Tag('tag', data[1].tagName);
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
