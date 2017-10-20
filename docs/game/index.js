class gameLoader{
    constructor(){
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    }
    onDeviceReady(){
        head.load(
            [
                "js/chance.min.js",
                "js/phaser.min.js",
                "game/enums.js",
                "game/engine.js",
                "game/states/screenTitle.js",
                "game/states/screenGame.js",
                "game/data/debug.js"            // <-- Remove on PROD
            ], ()=>{
                this.e = new engine();
                document.addEventListener('pause', ()=>{
                    this.e.pause();
                }, false);
                document.addEventListener('resume', ()=>{
                    this.e.resume();
                }, false);
                document.getElementById('app').setAttribute('style', 'display:none;');
                document.getElementById('game').setAttribute('style', 'display:table;');
        });
    }
}
let g = new gameLoader();
