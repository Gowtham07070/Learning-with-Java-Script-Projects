let url="http://universities.hipolabs.com/search?name=";

// let country="nepal";


let btn=document.querySelector("button");


btn.addEventListener("click",async(event)=>{

   event.preventDefault();
   

    let input=document.querySelector("input").value;

   await data(input);
    
})


async function data(country){
    let res=await axios.get(url + country);
    for(r of res.data){
        let li= document.createElement("li");
        let ul=document.querySelector("ul");;
        let cname=await r.name;
        li.innerHTML=cname;
        ul.append(li)
        console.log(cname)
    }
    
} 
