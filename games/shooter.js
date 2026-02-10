// Shooter Game Implementation

class ShooterGame {
    constructor() {
        this.score = 0;
        this.isGameOver = false;
    }

    startGame() {
        console.log('Game started!');
        this.isGameOver = false;
        this.score = 0;
        this.gameLoop();
    }

    gameLoop() {
        if (!this.isGameOver) {
            // Game logic here
            console.log('Game is running... Score: ' + this.score);
            // Simulate scoring
            this.score += Math.floor(Math.random() * 10);
            setTimeout(() => this.gameLoop(), 1000);
        } else {
            console.log('Game Over. Final Score: ' + this.score);
        }
    }

    endGame() {
        this.isGameOver = true;
    }
}

// Example usage:
const game = new ShooterGame();
game.startGame();
// After a while, call game.endGame() to stop the game.