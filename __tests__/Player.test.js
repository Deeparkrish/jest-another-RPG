const Player = require('../lib/Player.js');
const Potion =require('../lib/Potion');
jest.mock('../lib/Potion');

test('create a player object',()=>{
    const player =new Player('Dave')
    // expect(player.name).toBe("Dave");expect.any(String)
    expect(player.name.length).toBeGreaterThan(0);
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)])
})