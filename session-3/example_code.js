// source code

var list;

function createList() {
  list = [];
}

function addItem(item) {
  list.push(item);
}

function clearList() {
   list=[];
}

function showList() {
  console.log(list);
}


// ---------------------
// this is our interface

createList(); // creating a list


// test addItem
addItem("apples");

if (list.length === 1) {
  console.log("addItem works");
} else {
  console.error("addItem broken");
}

// test clearList
addItem("bananas");
clearList();

if (list.length === 0){
  console.log("clearList works");
} else {
  console.error("clearList doesn't work");
}

addItem("butter");

showList();

addItem("tea");

showList();
