const circle = document.querySelector('#circle')
const btn = document.querySelector('#btn')
var sound = new Audio('sound.mp3')

circle.addEventListener('click', changeColorContainer)

function changeColorContainer(){
    function changeColor(randR, randG, randB){
    
    sound.play()

    randR = Math.floor(Math.random()*255)
    randG = Math.floor(Math.random()*255)
    randB = Math.floor(Math.random()*255)
    
    return circle.style.backgroundColor = `rgb(${randR}, ${randG}, ${randB})`
}
   alert('clicked')
   setInterval(changeColor, 2000)
   
   setTimeout(()=>{
    circle.removeEventListener('click', changeColorContainer)
    alert('removed')
}, 3000)
}
