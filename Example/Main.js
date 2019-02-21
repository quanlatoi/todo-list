var body = document.querySelector('body');

var todoContainer = new Container('To Do');
var processContainer = new Container('Process');
var doneContainer = new Container('Done');

body.appendChild(todoContainer.component);
body.appendChild(processContainer.component);
body.appendChild(doneContainer.component);

todoContainer.setLeftPosition('100px');
processContainer.setLeftPosition('400px');
doneContainer.setLeftPosition('700px');