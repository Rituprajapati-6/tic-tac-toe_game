export default class Game {
    constructor(){
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }
    
    nextTurn(){
        if(this.turn == "X") {
            this.turn = "O";
        } else {
            this.turn = "X";
        }
    }
    
    makeMove(i){

        if(this.gameEnd()){ //if game ended, return
            return;
        }

        if(this.board[i]){
            return; //if already clicked, it'll just return back, i.e. no more move on the same grid
        }
        this.board[i] = this.turn;

        let wincombo = this.findWinningCombo();
        console.log("winner is ", wincombo);

        if(!wincombo){ //if somebody wins, then no nextturn 
            this.nextTurn();
        }
    }

    findWinningCombo(){
        const wincombo = [
            [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]
        ]

        for(const combo of wincombo){ //loop through the arrays to match the array set or indices
            const[a,b,c] = combo;

            if(this.board[a] && this.board[a] === this.board[b] && this.board[b] === this.board[c]) {
                // if(this.board[a]=="X"){
                //     console.log("X is winner"); //to check which symbol won
                // }
                return combo;
            }
        }
        return null;
    }

    gameEnd(){
        let wincombo = this.findWinningCombo();
        if(wincombo){ //if wincombo occurs i.e. winner found, gameEnd is true
            return true;
        }
        else{
            return false;
        }
    }

}