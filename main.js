// To do's
// Pontuação > Flicts Salvos [se colidir com cores, perde flicts]
// Objetivo: salvar todos os flicts > vai listando ao lado quais foram salvos, ou
// cria uma mensagem pop up temporario no canto superior direita dizendo qual flicts
// foi resgatado!
// Quantos mais forem salvos, aumenta a velocidade do jogo

//setup
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const fullScreenButton = document.getElementById('fullScreenButton')

canvas.width = 1200
canvas.height = 800

function toggleFullScreen() {
    console.log(document.fullscreenElement)
    if (!document.fullscreenElement) {
        canvas.requestFullscreen().catch(err => {
            alert(`Erro, não foi possível entrar em tela cheia: ${err.message}`)
        })
    } else {
        document.exitFullscreen()
    }
}
fullScreenButton.addEventListener('click', toggleFullScreen)

//game variables
let frame = 0
let gameSpeed = 4
caraOuCoroa = ["cara", "coroa"]
let squareOrFlictsInterval = Math.random() 

// 150 / 60 = 


function spawnSquareOrFlicts() {

    if (frame % 120 === 0) {

        let flictsOrSquare = caraOuCoroa[Math.floor(Math.random() * caraOuCoroa.length)]

        if (flictsOrSquare == "cara") {
            createFlicts()
            console.log('Flics Spawned')
        } 
        if (flictsOrSquare == "coroa") {
            createSquares()
            console.log('Square Spawned')
        }
    }
}

function animate() {
    frame++
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    handleStars()
    handlePlayer()
    spawnSquareOrFlicts()
    handleFlicts()
    handlesquares()
    if (quitGame) {return} // if presse "Q"
    requestAnimationFrame(animate)
}

function init() {
    setTimeout(()=>{animate()},500)
}
init()