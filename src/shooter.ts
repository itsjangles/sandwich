import 'phaser';

export class Shooter extends Phaser.Scene {
  constructor() {
    super({
      key: 'Shooter'
    });
  }

  preload(): void {
    this.load.image('circle', '../assets/circle.png');
    this.load.image('stick', '../assets/stick.png');
  }

  create(): void {
    let stick = this.physics.add.image(400, 600, 'stick');
    stick.setOrigin(0.5, 1);
    stick.setCollideWorldBounds(true);

    let circle = this.physics.add.image(200, 200, 'circle');
    circle.setCollideWorldBounds(true);
    circle.setBounce(1, 0.8);

    this.input.on('pointermove', (p: { x: number; y: number; }) => {
        stick.rotation = Phaser.Math.Angle.Between(p.x, p.y, stick.x, stick.y) - 3.14 / 2;
    });
    this.input.on('pointerdown', () => {
        console.log('click');
        circle.setVelocityY(-400);
    });
    circle.setVelocity(300, -400);
    circle.setGravityY(300);
  }

  update(): void {

   }
}