//배열연습...map

var numbers = [1,2,3,4,5];

var processd = numbers.map(function(num){
    return num*num;
});

console.log(processd);

var colors = ['red','orange','blue','pink','gray'];

colors.map((color,index)=>{
    console.log(color,index); //red,0
});