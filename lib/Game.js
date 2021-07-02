const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');
function  Game (){
    this.roundNumber =0;
    this.player;
    this.isPlayerTurn = false;
    this.currentEnemy;
    this.enemies=[];
};

Game.prototype.startNewBattle = function() {
    if (this.player.agility > this.currentEnemy.agility) {
      this.isPlayerTurn = true;
    } else {
      this.isPlayerTurn = false;
    }
    console.log('Your stats are as follows:');
    console.table(this.player.getStats());
    console.log(this.currentEnemy.getDescription());
  };

Game.prototype.initializeGame =function(){

    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
    this.currentEnemy=this.enemies[0];

    inquirer
.prompt({
    type:'text',
    name: 'name',
    message :'What is your name?'
})
.then(({name}) =>{
    this.player =new Player(name);
    this.startNewBattle();
    console.log(this.currentEnemy, this.player);
})
.catch((err)=> {
    throw(err);
});

};





module.exports =Game;