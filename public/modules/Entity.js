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

    update(cnvs) {
        // this.gravitySpeed += this.gravity
        (this.yPos < cnvs.height - this.height) ? (this.gravitySpeed += this.gravity) : (this.gravitySpeed = 0)
        this.xPos += this.xSpeed
        this.yPos += this.ySpeed + this.gravitySpeed
        this.hitBottom(cnvs)
    }

    hitBottom(cnvs) {
        const bottom = cnvs.height - this.height
        if (this.yPos >= bottom)
            this.yPos = bottom
        if (this.yPos + this.height === cnvs.height)
            this.ySpeed = 0
    }

    get x() {
        return this.xPos
    }

    // set x(xPos) {
    //     this.xPos = xPos
    // }

    get y() {
        return this.yPos
    }

    // set y(yPos) {
    //     this.yPos = yPos
    // }
}