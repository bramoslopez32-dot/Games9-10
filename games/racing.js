// Racing Game Implementation

class RacingGame {
    constructor() {
        this.players = [];
        this.trackLength = 1000; // track length in meters
        this.currentLap = 0;
    }

    addPlayer(name) {
        const player = {
            name: name,
            position: 0
        };
        this.players.push(player);
    }

    movePlayer(name, distance) {
        const player = this.players.find(p => p.name === name);
        if (player) {
            player.position += distance;
            if (player.position >= this.trackLength) {
                player.position -= this.trackLength;
                this.currentLap += 1;
                console.log(`${player.name} completed a lap!`);
            }
        }
    }

    getLeader() {
        return this.players.sort((a, b) => b.position - a.position)[0];
    }

    play() {
        // Simulated game loop (in reality, you would replace this with actual game logic)
        setInterval(() => {
            this.players.forEach(player => this.movePlayer(player.name, Math.random() * 100));
            console.log(`Current leader: ${this.getLeader().name}`);
        }, 1000);
    }
}

// Example usage:
const game = new RacingGame();
game.addPlayer('Alice');
game.addPlayer('Bob');
game.play();