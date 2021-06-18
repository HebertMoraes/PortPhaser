import Phaser from 'phaser';

export default class FasePrincipal extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: 'CenaFasePrincipal'
        });
    }

    preload ()
    {

    }
      
    create ()
    {   
        //TALVEZ NÃO SEJA CONSTANTES POIS PODE VIR BUG AO SAIR E ENTRAR DENOVO NA SCREEN
        
        //cria um mundo tiled e passa o mapa carregado anteriormente do qual é um JSON já carregado
        const map = this.make.tilemap({key: "map"});
        //insere a imagem carregada anteriormente como uma imagem que pode ser inserida no browser, e insere no lugar do tileSet1
        //que é o nome dado ao tileSet lá no tiledMap JSON.
        const tileSet1 = map.addTilesetImage("tileSet1", "tileSet1");
        const tileSet2 = map.addTilesetImage("tileSet2", "tileSet2");

        //Carrega, cria e aparentemente desenha a layer indicada pelo nome alí no parâmetro, nome este dado lá no tiledMap,
        //imagino que para poder carregar a layer, deve-se estar carregado todos as imagens dos tiled's usados na layer, 
        //e também inserido a imagem como tileSet, como na linha acima.
        //Pode ser que para criar uma única layer, pode-se passar vários tilesets para criar o mesmo, passando uma array de Strings
        //com os nomes dos tiledsets usados na única layer, isso porque irei usar desta forma, e creio que funciona
        const ground = map.createLayer("ground", [tileSet1, tileSet2], 0, 0);
        
    }

    update ()
    {

    }
}