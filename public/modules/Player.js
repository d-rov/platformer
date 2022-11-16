import { Entity } from "./Entity.js";

export class Player extends Entity {
    constructor(xPos, yPos, width, height) {
        super(xPos, yPos, width, height)
    }

    draw(ctx) {
        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.rect(this.xPos, this.yPos, 10, 20)
        ctx.fill()
    }
}