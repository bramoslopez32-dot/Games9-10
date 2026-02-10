// Puzzle Game Implementation

class PuzzleGame {
    constructor(size) {
        this.size = size;
        this.board = this.initBoard();
        this.emptyCell = { x: size - 1, y: size - 1 };
    }

    initBoard() {
        const board = [];
        let number = 1;
        for (let i = 0; i < this.size; i++) {
            board[i] = [];
            for (let j = 0; j < this.size; j++) {
                if (number < this.size * this.size) {
                    board[i][j] = number;
                    number++;
                } else {
                    board[i][j] = null;  // empty cell
                }
            }
        }
        return board;
    }

    moveTile(x, y) {
        if (this.isValidMove(x, y)) {
            this.board[this.emptyCell.x][this.emptyCell.y] = this.board[x][y];
            this.board[x][y] = null;
            this.emptyCell = { x: x, y: y };
        }
    }

    isValidMove(x, y) {
        const dx = Math.abs(this.emptyCell.x - x);
        const dy = Math.abs(this.emptyCell.y - y);
        return (dx + dy === 1);
    }

    printBoard() {
        for (let row of this.board) {
            console.log(row);
        }
    }
}

// Example usage:
const game = new PuzzleGame(3);
game.printBoard();

// Move a tile (for example, moving tile at (2, 1) into the empty space)
game.moveTile(2, 1);
game.printBoard();