const config = {
     type: Phaser.AUTO,
     width: 500,
     height: 300, 
     physics: {
    	 default:'arcade',
    	 arcade: {debug: true}
    	},
     scene: {
         create,
         update,
         preload,  
     }
}
const gameState = { 
     onColor: 0x001001,
     offColor: 0x000101
  }
const game = new Phaser.Game(config)


function preload(){

this.load.image('Back', 'GameImage.jpeg');

}

function create() {
 //this.add.image(250,150,'Back').setScale(1);
 gameState.background = this.add.tileSprite(250,150, 500, 300, 'Back');
 gameState.background.tileScaleX = 1.8;
}

function update(){
gameState.background.tilePositionX += 1.5;
}

