


const symbols = ['♣','❤','♠','♦'];
const numbers = ["A",2,3,4,5,6,7,8,9,10,'J','Q','K']

window.onload = ()=>{
    let number = document.querySelector(".number");
    let club = document.querySelectorAll(".clubs")
number.addEventListener('click', function(){
    const random = arr => arr[Math.floor(Math.random()*arr.length)]
    let getRandom = random(symbols)
    club.forEach(i =>{
     i.innerText = getRandom
    })
    console.log(random(numbers))

    number.innerText = random(numbers)
})
}



