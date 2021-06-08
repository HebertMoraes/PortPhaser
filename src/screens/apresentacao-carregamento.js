import Phaser from 'phaser';

import mapJSON from '../assets/maps/map.json';
import mapPNG from '../assets/assetsmap.png';
import waterPNG from '../assets/water.png';

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

        //carrega esta imagem
        this.load.image("background", waterPNG);
        this.load.image("tiles", mapPNG);
        //carrega este arquivo JSON
        this.load.tilemapTiledJSON("map", mapJSON);
    }
      
    create ()
    {
        
    }

    update ()
    {

    }
}