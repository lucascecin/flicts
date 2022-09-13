//1
const miauflicts = new Image()
miauflicts.src = 'img/miauFlicts.png'
//2
const monstroFlicts = new Image()
monstroFlicts.src = 'img/monstroFlicts.png'
//3
const anaFlicts = new Image()
anaFlicts.src = 'img/anaFlicts.png'
//4
const rodrigoFlicts = new Image()
rodrigoFlicts.src ='img/rodrigoFlicts.png'
//5
const isadorinhaFlicts = new Image()
isadorinhaFlicts.src ='img/isadorinhaFlicts.png'
//6
const salsichaFlicts = new Image()
salsichaFlicts.src ='img/salsichaFlicts.png'
//7
const centopeiaFlicts = new Image()
centopeiaFlicts.src ='img/centopeiaFlicts.png'
//8
const dinossauroFlicts = new Image ()
dinossauroFlicts.src = 'img/dinossauroFlicts.png'
//9
const estrelaFlicts = new Image()
estrelaFlicts.src =  'img/estrelaFlicts.png'
//10
const coelhoFlicts = new Image ()
coelhoFlicts.src = 'img/coelhoFlicts.png'
//11
const lunaFlicts = new Image()
lunaFlicts.src = 'img/lunaFlicts.png'
//12
const esquiloVoador = new Image()
esquiloVoador.src = 'img/esquiloVoador.png'
//13
const mariFlicts = new Image()
mariFlicts.src = 'img/mariFlicts.png'
//14
const berenice = new Image()
berenice.src = 'img/berenice.png'
//15
const borboletaFlicts = new Image()
borboletaFlicts.src = 'img/borboletaFlicts.png'
//16
const alienFlicts = new Image()
alienFlicts.src = 'img/alienFlicts.png'
//17
const solFlicts = new Image()
solFlicts.src = 'img/solFlicts.png'

//18
const cobraFlicts = new Image()
cobraFlicts.src = 'img/cobraFlicts.png'

//19
const frajolaFlicts = new Image()
frajolaFlicts.src = 'img/frajolaFlicts.png'

//20
const aliceFlicts = new Image()
aliceFlicts.src = 'img/aliceFlicts.png'


//audio assets
const hitSquare = new Audio()
hitSquare.src = 'audio/collideWithSquare.wav'
hitSquare.volume = 0.3
const hitFlicts = new Audio()
hitFlicts.src = 'audio/collideWithFlicts.wav'
hitFlicts.volume = 0.3

//Flicts arrays
flictsSprites = [miauflicts, monstroFlicts, anaFlicts, rodrigoFlicts, 
                isadorinhaFlicts, salsichaFlicts, centopeiaFlicts, dinossauroFlicts,
                estrelaFlicts, coelhoFlicts, lunaFlicts, esquiloVoador, mariFlicts,
                berenice, borboletaFlicts, alienFlicts, solFlicts, cobraFlicts,
                frajolaFlicts, aliceFlicts]; //20
flictsArray = [];

//Flicts Class
class Flicts {
    constructor(sourceImage) {
        this.sourceImage = sourceImage    
        this.width = sourceImage.width/2 || 150
        this.height = sourceImage.height/2 || 150
        this.x = Math.random() * (canvas.width - this.width)
        this.y = -200
        this.dx = (Math.random() - 0.5) * 2.5 
        this.dy = (Math.random() * 1.3) + 0.9 
        this.isOutofScreen = false
    }
    update() {
        this.x += this.dx * gameSpeed
        this.y += this.dy * gameSpeed
        if (this.x + this.width > canvas.width) {this.dx = this.dx * (-1)}
        if (this.x < 0) {this.dx = this.dx * (-1)}
        if (this.y > canvas.height) this.isOutofScreen = true;
    }
    draw(){
        this.sourceImage.onload = ctx.drawImage(this.sourceImage, this.x, this.y, this.width, this.height)
        
    }
}

//push new enemy to array
function createFlicts(){
    let randomSelectedFlicts = flictsSprites[Math.floor(Math.random() * flictsSprites.length)]
    let Flict = new Flicts(randomSelectedFlicts)
    flictsArray.push(Flict)
    //console.log("New Flicts created!")
}

function destroyFlictsOutOfScreen(){
    for (i in flictsArray) {
        let enemy = flictsArray[i]
        if (enemy.isOutofScreen) {
            flictsArray.splice(i, 1)
            i--
        }
    }
} 

function handleFlicts(){
    for (i in flictsArray){
        flictsArray[i].update()
        flictsArray[i].draw()

        //Quando a Lua resgata (colide) o Flicts
        if (collision(player, flictsArray[i])) {
            flictsArray.splice(i, 1)
            hitFlicts.play()
        }
    }
    destroyFlictsOutOfScreen()
}

