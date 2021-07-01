const Player = require('../lib/Player.js');
const Potion =require('../lib/__mock__/Potion');
jest.mock('../lib/Potion.js');
console.log(new Potion());


test('create a player object',()=>{
    const player =new Player('Dave')
    // expect(player.name).toBe("Dave");expect.any(String)
    expect(player.name.length).toBeGreaterThan(0);
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
});
test("gets player's stats as an object", () => {
    const player = new Player('Dave');
  
    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
  });
  test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');
  
    expect(player.getInventory()).toEqual(expect.any(Array));
  
    player.inventory = [];
  
    expect(player.getInventory()).toEqual(false);
  });

  test("get player's health value ",()=>{
    const player = new Player('Dave');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
  });

  test("check if the player is alive or not",()=>{
    const player = new Player('Dave');

    expect(player.isAlive()).toBeTruthy;
    player.health=0;
    expect(player.isAlive()).toBeFalsy;
  });

  test("Subtract from player's health",()=>{
    const player =new Player("Dave");
    const oldHealth = player.health;
    player.reduceHealth(10);
    expect(player.health).toBe(oldHealth-10);
    player.reduceHealth(10000);
    expect(player.health).toBe(0);
  });
  