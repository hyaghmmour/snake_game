const GRID_SIZE = {
    x: 21, 
    y: 21
}


export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE.x) + 1, 
        y: Math.floor(Math.random() * GRID_SIZE.y) + 1
    }
}

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE.x || 
        position.y < 1 || position.x > GRID_SIZE.y
    )
}
