var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
var stick, circle;

function preload ()
{
    this.load.image('bg', 'assets/bg.png');
    this.load.image('circle', 'assets/circle.png');
    this.load.image('stick', 'assets/stick.png');
}

function create ()
{
    this.add.image(400, 300, 'bg');
    stick = this.physics.add.image(400, 600, 'stick');
    // stick.setBounce(0.2);
    stick.setOrigin(0.5, 1);
    stick.setCollideWorldBounds(true);

    circle = this.physics.add.image(0, 0, 'circle');
    circle.setCollideWorldBounds(true);
}

function update ()
{
    this.input.on('pointermove', p => {
        stick.rotation = Phaser.Math.Angle.Between(p.x, p.y, stick.x, stick.y) - 3.14 / 2;
    });
}