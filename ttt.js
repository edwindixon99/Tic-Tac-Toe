const GameBoard = (() => {
    let board = [[null, null, null],[null, null, null],[null, null, null]];
    // const makeMove = function(char, row, col) {
    //     (!board[row][col]) ? board[row][col] = char : {}
    // }
    return {board}
}) ()

const Player = (char) => {

    const makeMove = function(row, col) {
        if (!GameBoard.board[row][col]) {
            GameBoard.board[row][col] = char
        }
        
    }
    return {char, makeMove}
}


const GameManager = (() => {
    const cpu = 
    let cpuTurn 
    const hasWon = function() {
        let row = GameBoard.board.some( array => array.every( (val, i, arr) => val === arr[0] && !(arr[0] == null)) ) 
        let col = function() {
            let first;
            let colDone;
            for (let i = 0; i < GameBoard.board.length; i++) {
                first = GameBoard.board[i][0]
                colDone = first? true: false
                
                if (colDone) {
                    for (let j = 1; j < GameBoard.board[i].length; j++) {
                        (GameBoard.board[i][j] == first)? colDone = true: colDone=false
                    }
                } else {
                    colDone = false;
                }

            if (colDone) {
                return true;
            }
            }
            return false 
        } ();
        let diag = function() {
            e = GameBoard.board.length - 1
            first = GameBoard.board[0][0]
            last = GameBoard.board[0][e]
            diagDone = first? true: false
            ediagDone = last? true: false
            
            
            for (let i = 0; i < GameBoard.board.length; i++) {
                if (diagDone) {
                (GameBoard.board[i][j] == first)? diagDone = true: diagDone=false
                } 
                if (ediagDone) {
                    (GameBoard.board[e-i][e-j] == last)? ediagDone = true: ediagDone=false
                }
            }
            
            if (diagDone || ediagDone) {
                return true;
            }
            return false 
        } ();
        return (diag || row || col)
    } ();

    return {hasWon};

}) ()

const player = Player('X');
const cpu = Player('O');
player.makeMove(0,0)
console.log(GameManager.hasWon)

// var app = new Vue({
//     el: '#app',
//     data: {
        
      
//     },
//     methods: {}
// })