// inputs and collision funtion

// inputs
const LEFT = 37, RIGHT = 39, SPACE = 32, Q = 81
let spaceIsPressed = false
let quitGame = false
//let touchY = ''
//let touchTreshold = 30 // minumun swipe
let touching = false;
let touchingX = 0;

window.addEventListener("keydown", keydownHandler, false)
window.addEventListener("keyup", keyupHandler, false)
window.addEventListener("touchstart", e => {
    touchingX = e.changedTouches[0].pageX
    //console.log(e.changedTouches[0].pageX)
    touching = true
    if (touchingX > player.x) {
        player.mvLeft = false
        player.mvRight = true
    }
    if (touchingX < player.x) {
        player.mvLeft = true
        player.mvRight = false
    }
})

window.addEventListener("touchmove", e => {
    console.log(e.changedTouches[0].pageY)
})

window.addEventListener("touchend", e => {
    console.log(e.changedTouches[0].pageX)
    touching = false
    
})

function keydownHandler(e) {
    switch(e.keyCode){
        case RIGHT:
            player.mvRight = true
            player.mvLeft = false
            break
        case LEFT:
            player.mvRight = false
            player.mvLeft = true
            break 
        case SPACE:
            //spaceIsPressed = true;
            //player.firing = true
            //if (!game.over) {player.shoot()}
            //player.canFireAgain = false; // após 1 disparo, não pode disparar mais
            //if (game.over && !game.active) {restartGame()}
            break
        case Q:
            quitGame = true
            break
    }
}

function keyupHandler(e) {
    switch(e.keyCode){
        case RIGHT:
            player.mvRight = false
            break;
        case LEFT:
            player.mvLeft = false
            break
        case SPACE:
            //spaceIsPressed = false;
            //player.firing = false;
            //player.canFireAgain = true;
            break
    }
}

//collision funtion (returns false when no collision is detected)
function collision(first, second){
    return !(first.x > second.x + second.width ||   
             first.x + first.width < second.x  ||   
             first.y > second.y + second.height||  
             first.y + first.height < second.y)    
}                                                  