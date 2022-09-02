squaresArray = []
colorsArray = ['red', 'orange', 'yellow', 'green', 'blue', '0047AB', 'purple']

class Square {
    constructor(color) {
        this.width = 80;
        this.height = 80;
        this.x = Math.random() * (canvas.width - this.width)
        this.y = -80;
        this.dx = (Math.random() - 0.5) * 2 // random entre -0.5 e 0.5
        this.dy = 1;
        this.isOutofScreen = false; 
        this.color = color
    }
    update() {
        this.x += this.dx * gameSpeed
        this.y += this.dy * gameSpeed
        if (this.x + this.width > canvas.width) {this.dx = this.dx * (-1)}
        if (this.x < 0) {this.dx = this.dx * (-1)}
        if (this.y > canvas.height) this.isOutofScreen = true;
    }
    draw(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

//push new enemy to array
function createSquares(){
    let randomSelectedcolor = colorsArray[Math.floor(Math.random() * colorsArray.length)]
    let square = new Square(randomSelectedcolor)
    squaresArray.push(square)
}

function destroysquaresOutOfScreen(){
    for (i in squaresArray) {
        let enemy = squaresArray[i]
        if (enemy.isOutofScreen) {
            squaresArray.splice(i, 1)
            i--
        }
    }
} 

function handlesquares(){
    for (i in squaresArray){
        squaresArray[i].update()
        squaresArray[i].draw()
        //Quando o Quadrado colide coma a Lua
        if (collision(player, squaresArray[i])) {
            let centerPlayer = player.x + player.width/2
            let centerSquare = squaresArray[i].x + squaresArray[i].width/2
            if (centerPlayer < centerSquare) {
                player.x -= 300
                if (player.x < 0) {player.x = 0}
            }
            else if (centerPlayer > centerSquare) {
                player.x += 300
                if (player.x > canvas.width) {player.x = canvas.width - player.width}
            }
            squaresArray.splice(i, 1)
            hitSquare.play()
        }
    }
    destroysquaresOutOfScreen()
}