const GameBoard = (() => {
    let board = [[null, null, null],[null, null, null],[null, null, null]];
    // const makeMove = function(char, row, col) {
    //     (!board[row][col]) ? board[row][col] = char : {}
    // }
    return {board}
}) ()

const Player = (char) => {
    let name;
    let isTurn;
    // const isTurn = function {
    // }
    const setIsTurn = function(bool) {
        isTurn = bool;
    }

    const getIsTurn = function() {
        return isTurn;
    }

    const makeMove = function(row, col) {
        if (!GameBoard.board[row][col] && isTurn) {
            GameBoard.board[row][col] = char
            GameManager.endturn()
            const square = document.getElementById(`${row}${col}`);
            square.textContent = char;
        } else {
            console.log("cant do that")
        }
        
        
    }
    return {char, isTurn, makeMove, setIsTurn, getIsTurn}
}


const GameManager = (() => {

    let p1 = Player('X');
    let p2 = Player('O');

    movesCount = 0;

    let player1Turn;

    const hasWon = function() {
        let row = GameBoard.board.some( array => array.every( (val, i, arr) => val === arr[0] && !(arr[0] == null)) ) 
        let col = function() {
            let first;
            let colDone;
            for (let i = 0; i < GameBoard.board.length; i++) {
                first = GameBoard.board[0][i]
                colDone = first? true: false
                
                if (colDone) {
                    for (let j = 1; j < GameBoard.board[i].length; j++) {
                        (GameBoard.board[j][i] == first)? colDone = true: colDone=false
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
                (GameBoard.board[i][i] == first)? diagDone = true: diagDone=false
                } 
                if (ediagDone) {
                    (GameBoard.board[e-i][e-i] == last)? ediagDone = true: ediagDone=false
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

    const endturn = function() {
        p1.setIsTurn(!p1.getIsTurn())
        p2.setIsTurn(!p2.getIsTurn())
        checkGameStatus()
        console.log(GameBoard.board)
        movesCount += 1;
    }

    const checkGameStatus = function() {
        if (hasWon) {
            console.log("someone won")
        } else if (movesCount == (GameBoard.board.length* GameBoard.board.length)) {
            console.log("a tie")
        }
    }
    // isGameOver() {

    // }

    return {p1, p2, gameStart, endturn, movesCount, hasWon};
}) ()

GameManager.gameStart()



const sect = document.getElementById('board');
for (let i=0; i<3; i++) {
    let row = document.createElement('div');
    row.setAttribute('class', 'row');

    for (j=0; j<3; j++) {
        let entry = document.createElement('div'); 
        entry.setAttribute('class', 'col');
        entry.setAttribute('id', `${i}${j}`)
        entry.setAttribute.onclick = function() { GameManager.p1.makeMove(i, j) }
        entry.textContent = "     ";
        row.appendChild(entry);
    }
    sect.appendChild(row)
}






GameManager.p1.makeMove(0,0)
console.log(GameBoard.board)
console.log(GameManager.hasWon)
GameManager.p1.makeMove(0,0)
GameManager.p1.makeMove(0,0)
GameManager.p2.makeMove(0,0)
GameManager.p2.makeMove(1,0)
GameManager.p2.makeMove(1,0)
GameManager.p2.makeMove(2,0)
GameManager.p1.makeMove(0,0)
console.log(GameBoard.board)







