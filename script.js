const colors=["#F7EC09",
"#F637EC",
"#37E2D5",
"#FF4949",
"#06FF00",
"#FF0075"]
const messages=['Try again','u cant catch me😒','still you are close']


function randomColors(){
return colors[Math.floor(Math.random()*colors.length)]
}
function randomMessages(){
    return messages[Math.floor(Math.random()*messages.length)]
}
function getrandomNumber(min,max){
   return  Math.floor(Math.random()*(max-min)+min);
}

// console.log(randomColors())
// console.log(randomMessages())
// console.log(getrandomNumber(1,500))