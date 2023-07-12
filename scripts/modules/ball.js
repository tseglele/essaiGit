export class Ball {
    constructor(x,y,r,color){

    this.x = x;
    this.y = y;
    this.r = r; 
    this.color=color;
  
    }
    drawBall(ctx){
        ctx.beginPath();
       ctx.arc(this.x, this.y, this.r, Math.PI * 2, false); 
       ctx.fillStyle = this.color;
       ctx.fill()
       ctx.closePath();
    }

}