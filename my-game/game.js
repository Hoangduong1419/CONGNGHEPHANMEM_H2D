let game;

window.onload=function () {
	const config = {
		type: Phaser.AUTO,
		width: 640,
		height: 360,
		parent: "phaser-game",
		background: 0x000000,
		scene: [Scene1, Scene2]
	};

	game = new Phaser.Game(config);
}






