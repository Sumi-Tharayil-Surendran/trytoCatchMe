let colors=["#F7EC09",
"#F637EC",
"#37E2D5",
"#FF4949",
"#06FF00",
"#FF0075"]
let messages=['Try again','cant catch me😒','u are close']


function randomColors(){
return colors[Math.floor(Math.random()*colors.length)]
}
function randomMessages(){
    return messages[Math.floor(Math.random()*messages.length)]
}
function getrandomNumber(min,max){
   return  Math.floor(Math.random()*(max-min)+min);
}

 console.log(randomMessages())
console.log(randomColors())
console.log(randomMessages())
console.log(getrandomNumber(1,500))

 let btn= document.getElementById("btn")
 btn.addEventListener("mouseover",event=>{
    let top,bottom,left,right;
    top = getrandomNumber(1,100)
    bottom=getrandomNumber(1,100)
    right=getrandomNumber(1,100)
    left=getrandomNumber(1,100)

    event.target.style.backgroundColor = `${randomColors()}`
    event.target.style.color="black";

    event.target.style.top=`${top}px`
    event.target.style.bottom=`${bottom}px`
    event.target.style.right=`${right}px`
    event.target.style.bottom=`${left}px`
    btn.innerHTML=`${randomMessages()}`;
 })