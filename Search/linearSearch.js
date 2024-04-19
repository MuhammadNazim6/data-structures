
const array = [1, 2, 3, 4, 5, 6, 7, 78, 99]

function linearSearch(target) {
  for (let i = 0; i <array.length; i++){
    if(array[i] === target){
      return true
    }
  }
  return false
}

console.log(linearSearch(778));
console.log(linearSearch(78));