

class Scene2 extends Phaser.Scene{

    constructor() {
        super("playGame");
    }

    create(){
        this.background = this.add.image(0, 0, "Background1").setOrigin(0, 0);

        //this.animationOfBall = this.add.sprite(145, 10, "animationOfBall");

        // this.anims.create({
        //     key: "animation_ball",
        //     frames: this.anims.generateFrameNumbers("animationOfBall"),
        //     frameRate: 100,
        //     repeat: -1,
        // });

        let _const = 115;
        let ballNumber = 6;
        for(var i = 0; i < ballNumber; i++){
            this.redBall = this.add.image(_const += 35, 10, "redBall").setOrigin(0, 0);
        }

        var text = this.add.text(350, 150, "Click Above " + "\n" + "The Strange Creature", {font: "25px Arial", fill: "black"});

        // var button = this.add.sprite(0, 100, "button").setOrigin(0, 0);
        // button.inputEnabled = true;
        // button.events.onInputDown.add(action(), this);
        //
        // function action(){
        //     text.text = 'correct';
        // }
        // let agrid = new AlignGrid({scene:this, row: 11, cols: 11});
        // agrid.showNumbers();
        //agrid.placeAtIndex()
    }

    update(){
        //this.moveBall(this.redBall, 2);
    }

}