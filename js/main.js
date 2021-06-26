import Game from "./game.js"
import GameView from "./gameView.js"

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", ()=> {
    newGame();
})

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile)=> {
    tile.addEventListener("click",()=>{
        onTileClick(tile.dataset.index); //tile.dataset.index is the i value for the function
    })
})

function onTileClick(i) {
    //make a move when a tile is clicked, change the turn and update board
    game.makeMove(i);
    gameView.updateBoard(game);
}

function newGame(){
    game = new Game(); //array would be emptied
    gameView.updateBoard(game); //board grid would be updates with null
}

gameView.updateBoard(game);