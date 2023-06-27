
// js object Destructuring
let students ={
    fname:"jiya",
    lname:"patidar",
    mobileno:"797934657",
    address:"neemuch",
    age:20,

}
//I want to extract some information from the student object

let {fname,mobileno,age} = students ;
console.log(fname,mobileno,age)