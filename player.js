const lua = new Image()
lua.src = 'img/lua.png'

class Player {
    constructor() {
        this.sourceImage = lua
        this.x = 300
        this.y = 645
        this.width = 200
        this.height = 200
        this.dx = 0
        this.dy = 0
        this.mvLeft = false
        this.mvRight = false
        this.dead = false
        this.opacity = 1
    }
    update() {
        if (this.mvRight) {
            this.x += 3
            if (this.x + this.width > canvas.width) {
                this.x = canvas.width - this.width
            }
        }
        if (this.mvLeft) {
            this.x -= 3
            if (this.x < 0) {
                this.x = 0
            }
        }
    }

    draw() {
        ctx.drawImage(this.sourceImage, this.x, this.y, this.width, this.height)
    }
}

let player = new Player()

function handlePlayer() {
    player.update();
    player.draw();
}