export default class GameView{

    constructor(){
        console.log("init gameview");
    }

    updateBoard(game){
        
        this.updateTurn(game);

        const wincombo = game.findWinningCombo();

        for(let i = 0; i < game.board.length; i++) {
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);
            tile.textContent = game.board[i];

            tile.classList.remove("tile-winner");

            let tileType = game.board[i] == 'X' ? "tile-x" : "tile-o"; 
            
            let winx = document.querySelector(".win-x");
            let wino = document.querySelector(".win-o");

            tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`; //it shows empty/" " instead of "null" in the grid.
            //tile is winning or matched combo and tile type is the either tile-o or tile-x
            if(wincombo && wincombo.includes(i)){
                tile.classList.add("tile-winner"); //if wincombo exists, it'll add the class title-winner
                // console.log(tileType);
                
            winx.classList.remove("winners");
            wino.classList.remove("winners");
                if(tileType=="tile-x"){
                    console.log("X wins");
                    winx.classList.add("winners");
                }else if (tileType=="tile-o"){
                    console.log("O wins");
                    wino.classList.add("winners");
                }
            }
        }
    }
    updateTurn(game){
        let playerx = document.querySelector(".player-x");
        let playero = document.querySelector(".player-o");
        playerx.classList.remove("active");
        playero.classList.remove("active");

        if(game.turn == 'X'){
        playerx.classList.add("active");
    }else {
        playero.classList.add("active");
    }
    }


}

