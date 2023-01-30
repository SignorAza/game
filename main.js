let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    box = document.querySelector('.game__box'),
    score = 0,
    time = 0,
    interval = 0;
    
function arrayRandElement(colors){
    let sl = Math.floor(Math.random() * colors.length);  
return colors[sl]
}
let colors = ['purple','red','black','blue','green','orange'];
     
    
btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value > 4) {
        time = input.value
        input.value = ''
        score = 0
        clearInterval(interval)
        start()
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
    }   
})

box.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()   
        createBall()
    }
})

    
function start() {

    interval =  setInterval(() => decrease(),1000)
    createBall()
    
}

function decrease() {
    if(time == 0) {
        end()
    }else {
        let currentTime = --time
        timeOut.innerHTML = currentTime
    }
}

function end() {
    box.innerHTML = `<h2 class="result">Вы набрали ${score} очков</h2>`
}


function createBall() {
    let ball = document.createElement('div')
    let size = rand (20,90)
    let cor = box.getBoundingClientRect()
    let x = random(0, cor.width - size)
    let y = random(0, cor.height - size)

   
    
    ball.classList.add('ball')
    ball.style.width = size + 'px';
    ball.style.height = size + 'px';
    ball.style.top = y + 'px'
    ball.style.left = x + 'px'
    ball.style.background = (arrayRandElement(colors))
    
    box.append(ball)
      
}
function createstar() {
    let star = document.createElement('div')
    let size = rand (20,90)
    let cor = box.getBoundingClientRect()
    let x = random(0, cor.width - size)
    let y = random(0, cor.height - size)

   
    
    star.classList.add('star')
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.top = y + 'px'
    star.style.left = x + 'px'
    star.style.background = (arrayRandElement(colors))  
    
    box.append(star)
      
}

function random(min,max) {
    return Math.floor(Math.random() * (max + 1 - min ) + min)
}
function rand(min,max) {
    return Math.floor(Math.random() * (max + 1 - min ) + min)
}




