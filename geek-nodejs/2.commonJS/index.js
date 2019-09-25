/**
 * @file 石头剪刀布 commonJS版
 * @date 2019-9-25
 * @author nocky
 */
let playerAction = process.argv[2]

const game = require('./lib')

// const result = game(playerAction)

// console.log(result);

let count = 0;
process.stdin.on('data', e => {
    const playerAction = e.toString().trim();
    // console.log(playerAction);
    const result = game(playerAction)
    console.log(result);
    if (result === 1) {
        count++;
    }
    if (count === 3) {
        console.log('太厉害了，我不玩了');
        process.exit();
    }
})