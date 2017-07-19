var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]


function addElementToBeginningOfArray(array, element){
  const arr = array;
  arr.unshift(element);
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var array = array;
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element){
  const arr = array;
  arr.push(element);
  return array
}

function addElementToEndOfArray(array, element){
  var arrray = array;
  arrray.push(element);
  return arrray
}

function destructivelyAddElementToEndOfArray(array, element){
  var list = array;
  list.push(element);
  return list
}

function accessElementInArray(array, index){
  var arr = array;
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var arrr = array;
  arrr.shift();
  return arrr
}

function removeElementFromBeginningOfArray(array){
  var arr = array;
  arr.shift();
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  var arr = array;
  arr.pop();
  return arr
}

function removeElementFromEndOfArray(array){
  var arr = array;
  arr.pop();
  return array
}
