import { Entity } from "./modules/Entity.js"
import { Player } from "./modules/Player.js"

const canvas = document.getElementById('game')
canvas.width = 400
canvas.height = 800

const ctx = canvas.getContext('2d')

const player = new Player(195, 780, 10, 20)

const platList = []

function draw() {
    requestAnimationFrame(draw)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    player.draw(ctx)
    player.update(canvas)

    platList.forEach((el) => {
        el.draw(ctx)
    })
}

draw()

window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case "ArrowUp":
            // this needs to be capped so only one jump is allowed
            if (player.ySpeed !== 0)
                break
            player.ySpeed -= 10
            break
        case "ArrowDown":
            console.log("duck")
            player.y += 10
            break
        case "ArrowLeft":
            console.log("move left")
            player.x -= 5
            break
        case "ArrowRight":
            console.log("move right")
            player.x += 5
            break
    }
})

window.addEventListener('click', (e) => {
    const newEnt = new Entity(e.clientX, e.clientY)
    platList.push(newEnt)
})