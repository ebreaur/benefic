import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  private _sounds: {};

  constructor() {
    // this.sounds = {
    //   "Tada": sound.create("~/sounds/Ring10.wav"),
    //   "Boo": sound.create("~/sounds/ringout.wav")
    // }
  }

  get sounds(): {} {
      return this._sounds;
  }

  set sounds(sounds: {}) {
    this._sounds = sounds;
  }

  public play(name: string) {
    // this.sounds[name].play();
    const TNSPlayer = require("nativescript-audio").TNSPlayer;

    const player = new TNSPlayer();
            player
                .initFromFile({
                    // the build has app inside app
                    audioFile: "~/sounds/lorin.mp3",
                    loop: false
                })
                .then(() => {
                    player.play();
                });
    }
}

