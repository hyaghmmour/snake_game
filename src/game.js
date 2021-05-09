
import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection ,SNAKE_SPEED } from './snake.js'
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

const gameBoard = document.getElementById('game-board')
let lastRenderTime = 0
let gameOver = false

function main(currentTime) {
    if (gameOver) {
        if (confirm('You Lost. Press okay to restart')) {
           window.location ='/'
       }
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < (1 / SNAKE_SPEED)) return
    
    console.log('Render')
    lastRenderTime = currentTime

    update()
    draw()
}


window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}


function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}