function add(a,b)
{
    console.log(a+b)
}
add(1,2)
//Arrow Function: we don't use function keyword
const s=(a,b)=>{
    console.log(a-b)
}
s(10,4)
const m=(a,b)=>{
    console.log(a*b)
}
m(3,2)
//callback 
const c=(a,b,func)=>
{
    func(a,b)
}
c(8,2,add)

//looping

let num=[2,3,5,6,7]
let obj={
    name:'abc',
    city:'mpl',
    age:19
}
for(let index in obj){
    console.log(obj[index])
}

