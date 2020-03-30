let _const = 110;
let ballNumber = 6;
let status = 0;

class Scene2 extends Phaser.Scene{

    constructor() {
        super("playGame");
    }

    create(){

        // background;
        this.background = this.add.image(0, 0, "backGround").setOrigin(0, 0);
        this.bird = this.add.image(100, 140, "imageBird").setOrigin(0, 0);

        // ball;
        var arr = new Array("redBall0");
        for(var i = 0; i < ballNumber; i++){
            arr[i] = this.add.image(_const += 35, 14, "redBall0").setOrigin(0, 0);
        }

        //animation;
        // var animationBall = this.add.sprite(200, 200, "animation").setOrigin(0, 0);
        // animationBall.anims.create({
        //     key: "animation_ball",
        //     frames: this.anims.generateFrameNumbers("animation"),
        //     framesRate: 20,
        //     repeat: -1
        // });

        //text;
        this.text1 = this.add.text(350, 180, "Click Above " + "\n" + "The Strange Creature", {font: "25px Arial", fill: "black"});
        this.clickCountText = this.add.text(100, 150, "Result", {font: "25px Arial", fill: "black"});
        this.spriteAbove = this.add.sprite(0, 60, 'button').setInteractive().on('pointerdown', () => this.moveBall(arr[ballNumber - 1])).setOrigin(0,0);
        this.spriteBelow = this.add.sprite(0, 280, 'button').setInteractive().on('pointerdown', () => this.moveBall1(arr[ballNumber - 1])).setOrigin(0,0);

        //button text;
        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.setTint(0x8EEDE2);
        });

        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.clearTint();
        });
    }


    moveBall(ball){
        if(status == 0){
            this.clickCountText.setText("Correct!");
            var temp = Phaser.Math.Between(0, 1);
            if(temp == 1){
                this.text1.setText( "Click Below " + "\n" + "The Strange Creature");
            }
            else{
                this.text1.setText( "Click Above " + "\n" + "The Strange Creature");
            }
            status = temp;
            ball.destroy();
            ball = null;
            ballNumber--;

            if(ballNumber == 0){
                this.text2 = this.add.text(280, 10, "WIN!", {font: "25px Arial", fill: "red" })
                this.spriteAbove.destroy();
                this.spriteAbove = null;
                this.spriteBelow.destroy();
                this.spriteBelow = null;
                this.text1.destroy();
                this.text1 = null;
                this.nextButton = this.add.image(450, 120, 'nextButton').setInteractive().setOrigin(0, 0);
                this.input.on('gameobjectover', function (pointer, gameObject) {
                    gameObject.setTint(0xff0000);
                });

                this.input.on('gameobjectout', function (pointer, gameObject) {
                    gameObject.clearTint();
                });
            }
        }
        else{
            this.clickCountText.setText("Wrong!");
            this.text1.setText("Below Below Below!");
        }
    }

    moveBall1(ball){
        if(status == 1){
            this.clickCountText.setText("Correct!");
            var temp = Phaser.Math.Between(0, 1);
            if(temp == 1){
                this.text1.setText( "Click Below " + "\n" + "The Strange Creature");
            }
            else{
                this.text1.setText( "Click Above " + "\n" + "The Strange Creature");
            }
            status = temp;
            ball.destroy();
            ball = null;
            ballNumber--;

            if(ballNumber == 0){
                this.text2 = this.add.text(280, 10, "WIN!", {font: "25px Arial", fill: "red" })
                this.spriteAbove.destroy();
                this.spriteAbove = null;
                this.spriteBelow.destroy();
                this.spriteBelow = null;
                this.text1.destroy();
                this.text1 = null;
                this.nextButton = this.add.image(450, 120, 'nextButton').setInteractive().setOrigin(0, 0);
                this.input.on('gameobjectover', function (pointer, gameObject) {
                    gameObject.setTint(0xff0000);
                });

                this.input.on('gameobjectout', function (pointer, gameObject) {
                    gameObject.clearTint();
                });
            }
        }
        else{
            this.clickCountText.setText("Wrong!");
            this.text1.setText("Above Above Above!");
        }
    }

    update(){

    }

}