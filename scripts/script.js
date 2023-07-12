import { Ball } from "./modules/ball.js";

let canvas= document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

let ball = new Ball(canvas.width/2, canvas.height/2,20,Math.PI * 2,"red");

let update = function () {
    ball.drawBall(ctx)
    requestAnimationFrame(update)
}

update()