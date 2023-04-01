let numbers=[2,3,4,6,8,9,21,27];
let selected=[]
for(let i = 0;i<numbers.length;i++)
{
  let divtwo = (numbers[i]%2)==0;
  let divthree = (numbers[i]%3)==0;
  
  if(divthree===true && divtwo===false)
  {
    selected.push(numbers[i]);
}
}
console.log("numbers divided by 3 but not 2 are "+selected)