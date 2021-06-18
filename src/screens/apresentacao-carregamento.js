import Phaser from 'phaser';

import mapJSON from '../assets/maps/fasePrincipal.json';
import tileSet1png from '../assets/maps/tilesSets/tileSet1.png';
import tileSet2png from '../assets/maps/tilesSets/tileSet2.png';

export default class Apresentacao extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: 'CenaApresentacao'
        });
    }

    preload ()
    {
        //Comando que faz com que ao carregar tudo alí embaixo, muda pra scene designada pela key
        this.load.on('complete', () => {
            this.scene.start('CenaFasePrincipal')
        });
        this.load.image("tileSet1", tileSet1png);
        this.load.image("tileSet2", tileSet2png);
        this.load.tilemapTiledJSON("map", mapJSON);
    }
      
    create ()
    {
        
    }

    update ()
    {

    }
}