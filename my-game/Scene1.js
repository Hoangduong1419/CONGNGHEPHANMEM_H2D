

class Scene1 extends Phaser.Scene{
    constructor() {
        super('bootGame');
    }

    preload() {
        // load data;
        this.load.image('backGround', 'assets/images/backGround.png')
        this.load.image('redBall0', 'assets/images/redBall.png')
        this.load.image('button', 'assets/images/button.png')
        this.load.image('nextButton', 'assets/images/nextButton.png')
        this.load.image('imageBird', 'assets/images/imageBird.png')

        this.load.spritesheet('animation', 'assets/spritesheets/animationOfBall.png', {
            frameWidth: 29,
            frameHeight: 26
        })
    }

    create() {
        this.add.text(20, 20, 'Loading game...');
        this.scene.start('playGame');
    }

    update(){

    }

}
