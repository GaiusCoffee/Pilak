class debug{
    constructor(){
        this.reseed(42);
    }
    reseed(newSeed){
        this.seed = newSeed;
        window.chance = new Chance(this.seed);
    }
}
const d = new debug();
