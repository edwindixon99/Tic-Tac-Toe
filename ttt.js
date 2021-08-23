const GameBoard = (() => {
    let board = [[null, null, null],[null, null, null],[null, null, null]];
    const addMove = function(char, row, col) {
        (!board[row][col]) ? board[row][col] = char : {}
    }
    return {board, addMove}
}) ()

Player
const GameManager = (() => {
    const hasWon = GameBoard.board
}


var app = new Vue({
    el: '#app',
    data: {
        
      
    },
    methods: {}
})