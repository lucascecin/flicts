// To do's
// Pontuação > Flicts Salvos [se colidir com cores, perde flicts]
// Objetivo: salvar todos os flicts > vai listando ao lado quais foram salvos, ou
// cria uma mensagem pop up temporario no canto superior direita dizendo qual flicts
// foi resgatado!
// Quantos mais forem salvos, aumenta a velocidade do jogo
// para celular, deixa pra um lado ou para o outro!


const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 1200
canvas.height = 800

//variables
let frame = 0
let gameSpeed = 1
caraOuCoroa = ["cara", "coroa"]

function spawnSquareOrFlicts() {

    if (frame % 350 === 0) {

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
animate()