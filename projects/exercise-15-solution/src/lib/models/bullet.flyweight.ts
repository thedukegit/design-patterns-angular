// stuff that doesnt change (a.k.a. 'intrinsic' data) goes here
export class BulletFlyweight {
  private sprite: string = 'beautiful sprite of a bullet';
  private sounds: string = 'pew pew';

  public getSprite(): string {
    return this.sprite;
  }

  public getSounds(): string {
    return this.sounds;
  }

  public setSoundAndSprite(sounds: string, sprite: string) {
    this.sounds = sounds;
    this.sprite = sprite;
  }


}
