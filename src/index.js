import Phaser from 'phaser';

import Apresentacao from './screens/apresentacao-carregamento.js';
import FasePrincipal from './screens/fase-principal.js';


const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1000,
    height: 650,
    scene: [Apresentacao, FasePrincipal]
};

const game = new Phaser.Game(config);