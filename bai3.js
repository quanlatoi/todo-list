var addCard = document.getElementById('yasuo');
addCard.addEventListener('click', function() {
  var showTextArea = document.getElementById('yasuo');
  showTextArea.setAttribute('style', 'display: none');
  var hiddenYasuo = document.getElementById('teemo');
  hiddenYasuo.removeAttribute('style', 'display: block');
  var btn = document.getElementById('btn');
  //add event cho thẻ input button
  btn.addEventListener('click', btnClick);
  //add event cho thẻ div chứa icon X
  var iconX = document.querySelector('.icon');
  iconX.addEventListener('click', function() {
    var showYasuo = document.getElementById('yasuo');
    showYasuo.removeAttribute('style', 'display: none');
    var hiddenTeemo = document.getElementById('teemo');
    hiddenTeemo.setAttribute('style', 'display: none');
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
    var showYasuo = document.getElementById('yasuo');
    showYasuo.removeAttribute('style', 'display: none');
    var hiddenTeemo = document.getElementById('teemo');
    hiddenTeemo.setAttribute('style', 'display: none');
    document.querySelector('textarea').value = '';
  }
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
}
