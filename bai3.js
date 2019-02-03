var addCard = document.getElementById('addCard');
addCard.addEventListener('click', function() {
  var del = document.querySelector('.addCard');
  del.innerHTML = '';
  var addNewCard = document.querySelector('.addCard');
  //tạo ô nhập\\
  var textArea = document.createElement('textarea');
  addNewCard.appendChild(textArea);
  textArea.setAttribute('placeholder', 'Nhập tiêu đề cho thẻ này...')
  var input = document.createElement('input');
  addNewCard.appendChild(input);
  input.setAttribute('type', 'button');
  input.setAttribute('value', 'Thêm thẻ');


  //tính năng thêm tiêu đề.
  var btn = document.querySelector('input');
  btn.addEventListener('click', function() {
    var classListCard = document.querySelector('.listCard');
    //tạo thẻ div
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
    span2.innerHTML = document.querySelector('textarea').value;


    //Khi ấn nút tạo thẻ sẽ trở lại ban đầu
    var clickBtn = document.querySelector('.addCard');
    clickBtn.addEventListener('click', function() {
      var del2 = document.querySelector('.addCard');
      del2.innerHTML = '';
      var addNewCard = document.querySelector('.addCard');
      var aStep1 = document.createElement('a');
      addNewCard.appendChild(aStep1);
      aStep1.setAttribute('id', 'addCard');
      aStep1.setAttribute('href', '#');
      var span2_1 = document.createElement('span');
      aStep1.appendChild(span2_1);
      var span2_2 = document.createElement('span');
      var i2 = document.createElement('i');
      span2_1.appendChild(i2);
      i2.setAttribute('class', 'fas fa-plus');
      aStep1.appendChild(span2_2);
      span2_2.innerHTML = 'Thêm thẻ khác';
    });
  });
});
