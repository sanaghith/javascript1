// https://edabit.com/user/pkkguKWMHCQShednx
var objectToArray={
    D: 1,
    B: 2,
    C: 3
  }
  
  var keys=Object.keys(objectToArray)
  console.log(keys)
  var values=Object.values(objectToArray)
  console.log(values)
  var tab=[]
  for(var i=0;i<keys.length;i++){
      tab.push([keys[i],values[i]])
  }
  
  
  console.log(tab)




  function getBudgets(arr) {
	var sum=0
	for(var i=0;i<arr.length;i++){
	    sum=sum+arr[i].budget;}
	    return sum
}

console.log(getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]))