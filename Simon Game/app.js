let gamesq=[];
let usersq=[];
let h3=document.querySelector("h3");
let h2=document.querySelector("h2");
let h4=document.querySelector("h4");
let btns=["red","purple","blue","green"];
let high_level=0;
let level=0;
h4.innerHTML=`High Score ${high_level}`;
let started=false;




document.addEventListener("keypress",function(event){
    if(started==false){
        document.addEventListener("click",function(){
            document.querySelector("body").style.backgroundColor="white";
        });
        started=true;

        levelup();
    }else{
       
    }
});


function flashbtn(btn){
    btn.classList.add("greend");
    setTimeout(function(){
        btn.classList.remove("greend");
    },500);
}
function flashbtnw(btn){
    
    btn.classList.add("white");
    setTimeout(function(){
        btn.classList.remove("white");
    },500);
}
function levelup(){
    usersq=[];
    level++;
    h3.innerHTML=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtns=document.querySelector(`.${randColor}`);
    gamesq.push(randColor);
    console.log(gamesq);
    flashbtnw(randbtns); 
  
}

function check(idx){
    console.log(`curr level : ${level}`)
    

    if(usersq[idx] === gamesq[idx]){
        console.log("Same value");
        if(usersq.length==gamesq.length){
           setTimeout (levelup,1000);

          
        }
    }else{
        
        h3.innerHTML="GameOver! Press anykey to start. ";
        h2.innerHTML=`your score was ${level}`;
        if(high_level<level){
            high_level=level;

        h4.innerHTML=`High Score ${high_level}`;
        }
      
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="rgba(0, 0, 0, 0.959)";   
        })
    
        reset();
    }
}

function btnpress(){
    let btn=this;
    flashbtn(btn);

   let usercolor=btn.getAttribute("id");
   usersq.push(usercolor)
   console.log(usersq)

   check(usersq.length-1);
   
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}

function reset(){

    started=false;
    usersq=[];
    gamesq=[];
    level=0;


}

