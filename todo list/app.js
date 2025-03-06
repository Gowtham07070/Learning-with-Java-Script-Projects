let input=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let li=document.querySelector("li");
let form=document.querySelector("form");
let dele=document.querySelectorAll(".delete");

form.addEventListener("click",function(event){
  event.preventDefault();
 
})

btn.addEventListener("click",function(event){
  event.preventDefault();
    let newLi=document.createElement("li");
    newLi.innerHTML=input.value;
    
    let bt=document.createElement("button");
    bt.innerHTML="delete";
    bt.classList="delete"
    newLi.append(bt)
    ul.append(newLi);
  console.log(input.value);
  input.value="";

})

  ul.addEventListener("click",function(event){
    console.log(event.target.nodeName)
    if(event.target.nodeName=="BUTTON"){
      let par=event.target.parentElement;
      par.remove()
    }
  })
