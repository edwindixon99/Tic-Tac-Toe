const GameBoard = (() => {
    let board = [[null, null, null],[null, null, null],[null, null, null]];
    // const makeMove = function(char, row, col) {
    //     (!board[row][col]) ? board[row][col] = char : {}
    // }
    const getBoard = function() {
        return board;
    }

    const avaliableIndices = (boarde) => {
        console.log(boarde)
        let indices = []
        for (let i = 0; i<boarde.length; i++) {
            for (let j = 0; j<boarde.length; j++) {
                if (boarde[i][j] == null) {
                    indices.push([i,j]);
                }
            }
        }
        return indices
    }
    return {board, avaliableIndices}
}) ()

const Player = (char) => {
    let name;
    let isTurn= false;
    // const isTurn = function {
    // }
    const setIsTurn = function(bool) {
        isTurn = bool;
    }

    const getIsTurn = function() {
        return isTurn;
    }

    const makeMove = function(row, col) {
        if (!GameBoard.board[row][col] && getIsTurn()) {
            GameBoard.board[row][col] = char
            
            const square = document.getElementById(`${row}${col}`);
            square.textContent = char;
            GameManager.endturn()
            return true;
        } else {
            console.log("cant do that")
            return false;
        }
    }
    

        
        

    return {char, isTurn, makeMove, setIsTurn, getIsTurn}
}


const GameManager = (() => {

    let p1 = Player('X');
    let p2 = Player('O');

    movesCount = 0;

    let player1Turn;

    let hasWon = function(char) {
        console.log("jkglsdhgkhgkhjkghjkhfjklshfkhkfhaskdfhdskh")
        let row = GameBoard.board.some( array => array.every( (char, i, arr) => char === arr[0] && !(arr[0] == null)) ) 
        let col = function() {
            let colDone;
            for (let i = 0; i < GameBoard.board.length; i++) {
        
                colDone = char? true: false
                
                
                for (let j = 1; j < GameBoard.board[i].length; j++) {
                    if (colDone) {
                        (GameBoard.board[j][i] == char)? colDone = true: colDone = false;
                    } else {
                        break;
                    }
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
            diagDone = (first == char)? true: false
            ediagDone = (last == char)? true: false
            
            
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
    };

    

    const gameStart = function() {
        p1.setIsTurn(true)
        p2.setIsTurn(false)
        GameBoard.board = [[null, null, null],[null, null, null],[null, null, null]];
    }

    const endturn = function() {
        if (p1.getIsTurn()) {
            checkGameStatus(p1.char)
        } else {
            checkGameStatus(p2.char)
        }
        
        p1.setIsTurn(!p1.getIsTurn())
        p2.setIsTurn(!p2.getIsTurn())
        

        movesCount += 1;
        if (p2.getIsTurn()) {

            cpumm()
        }
        
    }

    const checkGameStatus = function(char) {
        if (hasWon(char)) {
            gameOver(true, char);
        } else if (movesCount == (GameBoard.board.length* GameBoard.board.length)) {
            gameOver(false, char);
        }
    }

    const cpumm = function() {
        let avaliableIndices = GameBoard.avaliableIndices(GameBoard.board)
        let choice = Math.floor(Math.random() * avaliableIndices.length); 
        let ydex, xdex;

        ydex = avaliableIndices[choice][0]
        xdex = avaliableIndices[choice][1];

        p2.makeMove(ydex, xdex)
    
    }

    const gameOver = function(status, char) {
        p1.setIsTurn = false;
        p2.setIsTurn = false;
        if (status) {
            alert(`Game Over!!!\n${char} won the game.`)
        } else {
            alert(`Game Over!!!\nIt was a tie game.`)
        }
        const sect = document.getElementById('restart');
        let rsButton = document.createElement('button'); 
        rsButton.classList.add('btn', 'btn-primary')
        rsButton.addEventListener("click", function() {GameManager.gameStart() })
        sect.appendChild(rsButton);   
    }

    return {p1, p2, gameStart, endturn, movesCount, hasWon, cpumm, gameOver};
}) ()

GameManager.gameStart()



const sect = document.getElementById('board');
for (let i=0; i<3; i++) {
    let row = document.createElement('tr');

    for (let j=0; j<3; j++) {
        let entry = document.createElement('td'); 
        entry.setAttribute('id', `${i}${j}`)

        entry.addEventListener("click", function() {GameManager.p1.makeMove(i, j) })
        row.appendChild(entry);
    }
    sect.appendChild(row)
}






// GameManager.p1.makeMove(0,0)
console.log(GameBoard.board)
console.log(GameManager.hasWon)
// GameManager.p1.makeMove(0,0)
// GameManager.p1.makeMove(0,0)
// GameManager.p2.makeMove(0,0)
// GameManager.p2.makeMove(1,0)
// GameManager.p2.makeMove(1o,0)
// GameManager.p2.makeMove(2,0)
// GameManager.p1.makeMove(0,0)
console.log(GameBoard.board)







