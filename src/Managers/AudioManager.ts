export class AudioManager {
    private static scene: Phaser.Scene;
    private static currentMusic: Phaser.Sound.BaseSound;

    public static init(scene: Phaser.Scene)
    {
        AudioManager.scene = scene;
        AudioManager.scene.sound.pauseOnBlur = false;
    }

    public static playMusic(key: string, config?: Phaser.Types.Sound.SoundConfig) : void
    {
        if (AudioManager.currentMusic)
        {
            AudioManager.currentMusic.stop();
            AudioManager.currentMusic.destroy();
            AudioManager.currentMusic = null;
        }

        AudioManager.currentMusic = AudioManager.scene.sound.add(key, config);
        AudioManager.currentMusic.play({loop: true});
    }

    public static stopMusic() : void
    {
        if (AudioManager.currentMusic)
        {
            AudioManager.currentMusic.stop();
        }
    }
}