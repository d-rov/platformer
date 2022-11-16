export class Entity {
    constructor(xPos, yPos, width, height) {
        this.width = width
        this.height = height
        this.xPos = xPos
        this.yPos = yPos
        this.xSpeed = 0
        this.ySpeed = 0
        this.gravity = 0.5
        this.gravitySpeed = 0
    }

    draw(ctx) {
        ctx.fillStyle = "black"
        ctx.beginPath();
        ctx.arc(this.xPos, this.yPos, 50, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
        this.gravitySpeed += this.gravity
        this.xPos += this.xSpeed
        this.yPos += this.ySpeed + this.gravitySpeed
        this.hitBottom()
    }

    hitBottom() {
        // console.log(this.canvas.height)
        const bottom = this.canvas.height - this.height
        // console.log(bottom)
        if (this.yPos > bottom)
            this.yPos = bottom
    }

    get x() {
        return this.xPos
    }

    set x(xPos) {
        this.xPos = xPos
    }

    get y() {
        return this.yPos
    }

    set y(yPos) {
        this.yPos = yPos
    }
}