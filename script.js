//let myAge =1
//let humanDogRatio= 7
//let myDogAge = myAge + humanDogRatio
//console.log(myDogAge)

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment (){
    count +=1
    countEl.innerText=count
}


function save() {
  let countStr = count + " - "
saveEl.textContent += countStr
countEl.innerText=0
count=0

}

let welcomeEl = document.getElementById("welcome-el")
let name = " Ajayi Joshua Mayokun"
let greeting = "Welcome back "
welcomeEl.textContent = greeting + name

welcomeEl.innerText +=" 👋"

let userEl =document.getElementById("user-el")
console.log(userEl)

    userEl.textContent = `User Name:, ${myName}`;
 

