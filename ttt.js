const GameBoard = (() => {
    let board = [[null, null, null],[null, null, null],[null, null, null]];
    // const makeMove = function(char, row, col) {
    //     (!board[row][col]) ? board[row][col] = char : {}
    // }
    return {board}
}) ()

const Player = (char) => {
    let isTurn;
    // const isTurn = function {
    // }
    const setIsTurn = function(bool) {
        isTurn = bool;
    }

    const makeMove = function(row, col) {
        if (!GameBoard.board[row][col] && isTurn) {
            GameBoard.board[row][col] = char
            isTurn = !isTurn;
        }
        
        
    }
    return {char, isTurn, makeMove, setIsTurn}
}


const GameManager = (() => {

    let p1 = Player('X');
    let p2 = Player('O');


    let player1Turn;

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

    

    const gameStart = function() {
        p1.setIsTurn(true)
        p2.setIsTurn(false)
    }

    const changePlaying = function() {
        
    }

    return {p1, p2, gameStart, hasWon};
}) ()



GameManager.gameStart()


GameManager.p1.makeMove(0,0)
console.log(GameBoard.board)
console.log(GameManager.hasWon)

// var app = new Vue({
//     el: '#app',
//     data: {
        
      
//     },
//     methods: {}
// })