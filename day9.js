// const para=document.getElementsByTagName("p");

// for (let i=0;i<para.length;i++){
//  if(i%2===0){
//     para[i].style.color="blue"
//  }
//  else{
//     para[i].style.color="green"
//  }

// }
// para[para.length-1].style.fontWeight="bold"

const para=document.getElementsByTagName("p");
console.log(para);

for (let i=0;i<para.length;i++){
 if(i%2===0){
    para[i].style.color="blue"
 }
 else{
    para[i].style.color="green"
 }

}
para[para.length-1].style.fontWeight="bold"



// #create a new element and append

const newPara=document.createElement("p");
newPara.textContent="This is a dynamically created para";

console.log(newPara)
document.getElementById("content").append(newpara);

