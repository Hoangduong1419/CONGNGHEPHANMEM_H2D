
class Scene1 extends Phaser.Scene{
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image("Background1", "assets/images/Background1.png")
        this.load.image("redBall0", "assets/images/redBall.png")
        this.load.image("button", "assets/images/button.png")
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }

    update(){

    }

}
