let input=prompt("enter your input");

let randomNum=Math.floor(Math.random()*input)+1;
console.log(randomNum);

let ans=prompt("enter your guess");

while(true){
    
    if(ans=="quit"){
        console.log("you quit")
        break;
    }

    if(ans==randomNum){
        console.log("yes u won");
        break;
       
    }else if(ans!=randomNum){
        console.log("try again")
        if(ans> randomNum){
            ans=prompt("try a smaller  number");
        }else{
            ans=prompt("try a bigger number");
        }
    ans=prompt("enter your guess");
    }

}
