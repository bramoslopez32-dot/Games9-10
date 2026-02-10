// Strategy game implementation

class StrategyGame {
    constructor() {
        this.units = [];
        this.resources = 100;
    }

    addUnit(unit) {
        this.units.push(unit);
    }

    gatherResources(amount) {
        this.resources += amount;
    }

    attack(target) {
        if (this.units.length > 0) {
            console.log(`Attacking ${target} with ${this.units.length} units.`);
        } else {
            console.log('No units available for attack.');
        }
    }
}

// Example usage
const game = new StrategyGame();

game.addUnit('Warrior');
console.log(`Resources: ${game.resources}`);

game.gatherResources(50);
console.log(`Resources after gathering: ${game.resources}`);

game.attack('Enemy Base');
