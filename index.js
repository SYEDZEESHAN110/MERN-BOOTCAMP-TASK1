let submit=document.getElementById('submit1');
submit.addEventListener("click",addition);

function addition(){

    let cardVal=document.getElementById("info");
    cardVal.classList.remove('d-none');

let iname=document.getElementById("iname").value;
let iemail=document.getElementById("iemail").value;
let iphone=document.getElementById("iphone").value;
console.log(iname,iemail,iphone);

let account= document.getElementsByName('gender');
let accType;

for(let i=0;i<account.length;i++){

    if(account[i].checked){
        accType=account[i].value;
        console.log(accType);
      
    }
  

}
document.getElementById('').innerHTML=iname;

document.getElementById('').innerHTML=iemail;

document.getElementById('').innerHTML=iphone;
document.getElementById('').innerHTML=accType;


}
