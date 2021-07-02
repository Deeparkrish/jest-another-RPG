const Potion =require('../lib/Potion');
const Character = require('./Character');

 class Enemy extends Character
 {
   constructor(name, weapon){
    super(name);
    this.weapon= weapon;
     this.potion = new Potion();
     
 };
  getDescription(health) 
  {
    this.health =health;
    return `A ${this.name} with a ${this.weapon} has appeared!`;
  }
 }



 module.exports = Enemy;
