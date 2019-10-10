// 回调地狱
// interview(function (err) {
//     if (err) {
//         return console.log('cry at 1st round');
//     }
//     interview(function (err) {
//         if (err) {
//             return console.log('cry at 2nd round');
//         }
//         interview(function (err) {
//             if (err) {
//                 return console.log('cry 3rd round');
//             }
//             console.log('yeah');
//         })
//     })
// })

function interview(callback) {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            callback(null, 'success')
        } else {
            callback(new Error('fail'))
        }
    }, 500);
} 