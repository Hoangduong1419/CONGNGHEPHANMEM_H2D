let _const = 115;
let ballNumber = 6;
let status = 0;

class Scene2 extends Phaser.Scene{

    constructor() {
        super("playGame");
    }

    create(){
        // background;
        this.background = this.add.image(0, 0, "Background1").setOrigin(0, 0);
        // ball;
        var arr = new Array("redBall0");
        for(var i = 0; i < ballNumber; i++){
            arr[i] = this.add.image(_const += 35, 10, "redBall0").setOrigin(0, 0);
        }
        //text;
        this.text1 = this.add.text(350, 150, "Click Above " + "\n" + "The Strange Creature", {font: "25px Arial", fill: "black"});
        this.clickCountText = this.add.text(0, 150, "Result", {font: "25px Arial", fill: "black"});
        //button text;
        const clickButton = this.add.text(200, 80, "Above", {font: "25px Arial", fill: "black" })
            .setInteractive()
            .on('pointerdown', () => this.moveBall(arr[ballNumber - 1]));

        const clickButton1 = this.add.text(200, 280, "Below", {font: "25px Arial", fill: "black" })
            .setInteractive()
            .on('pointerdown', () => this.moveBall1(arr[ballNumber - 1]));


    }


    moveBall(ball){
        if(status == 0){
            this.clickCountText.setText("Correct!");
            this.text1.setText( "Click Below " + "\n" + "The Strange Creature");
            status = 1;
            ball.x += 2000;
            ballNumber--;
            if(ballNumber == 0){
                this.text2 = this.add.text(250, 10, "Huan Ngu Lon", {font: "25px Arial", fill: "red" })
            }
        }
        else{
            this.clickCountText.setText("Wrong!");
            this.text1.setText("Below Below co ma!");
        }


    }
    moveBall1(ball){
        if(status == 1){
            ball.x += 2000;
            this.clickCountText.setText("Correct!");
            this.text1.setText( "Click Above " + "\n" + "The Strange Creature");
            status = 0;
            ballNumber--;
            if(ballNumber == 0){
                this.text2 = this.add.text(250, 10, "Huan Ngu Lon", {font: "25px Arial", fill: "red" })
            }
        }
        else{
            this.clickCountText.setText("Wrong!");
            this.text1.setText("Above Above co ma!");
        }
    }

    update(){
    }

}
