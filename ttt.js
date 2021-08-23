const GameBoard = (() => {
    let board = [[null, null, null],[null, null, null],[null, null, null]];
    const addMove = function(char, row, col) {
        (!board[row][col]) ? board[row][col] = char : {}
    }
    return {board, addMove}
}) ()

Player
const GameManager = (() => {
    const hasWon = function() {
        let row = GameBoard.board.some( array => array.every( (val, i, arr) => val === arr[0] ) ) 
        let col = function() {
            let first = null;
            colDone = true;
            for (let i = 0; i < GameBoard.board; i++) {
                
                first = GameBoard.board[i][0]
                if (first) {
                    for (let j = 1; j < GameBoard.board[i]; j++) {
                        (GameBoard.board[i][j] == first)? colDone = true: colDone=false
                    }
                }
            } 

}


var app = new Vue({
    el: '#app',
    data: {
        
      
    },
    methods: {}
})