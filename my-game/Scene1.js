
class Scene1 extends Phaser.Scene{
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image("Background1", "assets/images/Background1.png")
        this.load.image("redBall", "assets/images/redBall.png")

        // this.load.spritesheet("animationOfBall", "assets/spritesheets/animationOfBall.png",{
        //     frameWidth: 29,
        //     frameHeight: 26,
        // });
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }

    update(){

    }

}
