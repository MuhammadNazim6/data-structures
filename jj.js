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



 
const arr = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0 ; i < arr.length ; i++){
  if(arr[i] % 3 === 0){
    arr.splice(i,1)
  }
}

console.log(arr);




const user = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: ()=> { this.firstName + " " + this.lastName;  }
}

console.log(user.fullName()); // Output: John Doe

const binded = user.fullName.bind(user);
console.log(binded()); // Output: John Doe






class newClass{
  constructor(){

  }
}


const obj = new newClass()




let b = 100

setTimeout(function() {
  console.log(b);
  b = 5
}, 1000);

b = 150

setTimeout(function() {
  console.log(b);
}, 1500);

b = 200






function  printTen(num){
  if(num === 0){
    return 
  }
  console.log(num);
  num--
  printTen(num)
}

printTen(10)




let arr = [[1],[2,3],[4,5,6,7]]
let newArr = []
for(let i = 0 ; i < arr.length ; i++){
  for(let j = 0 ; j < arr[i].length; j++){
    newArr.push(arr[i][j])
  }
}
console.log(newArr);


{
  '_id': 1,
  firstname: 'John',
  'lastname': 'Doe',
  'salary': 80000,
  'age': 30,
  'gender': 'Male',
  'married': false,
'department': 2
}

db.employees.find({$or:[{$and:[{gender:'male'},{age:{$gt:25}}]},{$and:[{gender:'female'},{age:{$lt:25}}]}]})

db.employees.aggregate([
  {$match:{married:true}},
  {$group:{_id:'$gender' , count:{$sum:1}}}
])

const http = require('http')

const server = http.createServer((req,res)=>{
  if(req.url ==='/'){
    res.write('Hello')
    res.end()
  }
})

server.listen(3000,()=>{

})


const event = require('events')

const emitter = new event()


emitter.on('new',()=>{
  console.log('My new event');
})

emitter.emit('new')