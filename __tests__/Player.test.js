const Player = require('../lib/Player.js');
const Potion =require('../lib/__mock__/Potion');
jest.mock('../lib/Potion.js');


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

  test("get player's attack value",()=>{
    const player =new Player("Dave");
    player.strength=10;
    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(player.getAttackValue()).toBeLessThanOrEqual(15);
  });

  test('adds a potion to the inventory', () => {
    const player = new Player('Dave');
    const oldCount = player.inventory.length;
  
    player.addPotion(new Potion());
  
    expect(player.inventory.length).toBeGreaterThan(oldCount);
  });
  test('uses a potion from inventory', () => {
    const player = new Player('Dave');
    player.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = player.inventory.length;
  
    player.usePotion(1);
  
    expect(player.inventory.length).toBeLessThan(oldCount);
  });

  