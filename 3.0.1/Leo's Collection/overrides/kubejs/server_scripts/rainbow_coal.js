
const RAINBOW_COAL_CHANCE = 1 / 100000;
const RAINBOW_COAL_ID = 'ironfurnaces:rainbow_coal';

const COAL_ORES = [
    'minecraft:coal_ore',
'minecraft:deepslate_coal_ore'
];

COAL_ORES.forEach(ore => {
    BlockEvents.broken(ore, event => {
        if (Math.random() < RAINBOW_COAL_CHANCE) {
            event.block.popItem(
                Item.of(RAINBOW_COAL_ID, 1)
            );
        }
    });
});
