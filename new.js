(function(){
  console.log('Hello');
}())


function *mulOfFFive(){
  let num = 5
  while(true){
    yield num
    num+=5
  }
}


let multiple = mulOfFFive()

console.log(multiple.next().value);
console.log(multiple.next().value);
console.log(multiple.next().value);
console.log(multiple.next().value);