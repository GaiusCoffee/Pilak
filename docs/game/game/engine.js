class engine{
    constructor(){
        // Global Variable Store
        this.g = {};
        this.g.canvasH = window.innerHeight * window.devicePixelRatio;
        this.g.canvasW = ((9/16) * window.innerHeight) * window.devicePixelRatio;
        // Load Game
        if (!localStorage.getItem("saveFile")) {
            this.s = {};
            this.g.firstTime = true;
        } else {
            this.s = localStorage.getItem("saveFile");
            this.g.firstTime = false;
        }
        // Initialize Phaser
        this.p = new Phaser.Game(this.g.canvasW, this.g.canvasH, Phaser.CANVAS, 'game');
        this.p.state.add("title", new screenTitle(this));
        this.p.state.add("game", new screenGame(this));
        this.p.state.start("game");
    }
    pause(){
        this.p.paused = true;
    }
    resume(){
        this.p.paused = false;
    }
}
