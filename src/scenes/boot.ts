import Phaser from "phaser";
import type { LaunchOptions } from "../main.ts";
import { loadSounds } from "../sounds.ts";
import { makeTextures } from "../textures.ts";

export function fadeOut(scene: Phaser.Scene, next: () => void): void {
  scene.cameras.main.fadeOut(450, 4, 2, 12);
  scene.cameras.main.once("camerafadeoutcomplete", next);
}

export class BootScene extends Phaser.Scene {
  constructor(private readonly options: LaunchOptions) {
    super("boot");
  }

  create(): void {
    makeTextures(this);
    loadSounds(this);
    this.scene.start("title", { autoStart: this.options.attract });
  }
}
