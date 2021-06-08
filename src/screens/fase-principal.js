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
        //simplesmente inserir uma imagem já carregada, não sei porque mas se passar parametro x & y como 0, ainda aparece
        this.add.image(650, 650, "background");
        //cria um mundo tiled e passa o mapa carregado anteriormente do qual é um JSON já carregado
        const map = this.make.tilemap({key: "map"});
        //insere a imagem carregada anteriormente como uma imagem que pode ser inserida no browser, e insere no lugar do assetsMap
        //que é o nome dado ao tileSet lá no tiledMap JSON.
        const tileset = map.addTilesetImage("assetsMap", "tiles");
        
        //Carrega, cria e aparentemente desenha a layer indicada pelo nome alí no parâmetro, nome este dado lá no tiledMap,
        //imagino que para poder carregar a layer, deve-se estar carregado todos as imagens dos tiled's usados na layer, 
        //e também inserido a imagem como tileSet, como na linha acima.
        const ground = map.createLayer("ground", tileset, 0, 0)
        const objectCollider = map.createLayer("ObjectCollider", tileset, 0, 0)
        const aboveCollider = map.createLayer("aboveObject", tileset, 0, 0)
    }

    update ()
    {

    }
}