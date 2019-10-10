(function() {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve()
            // reject(new Error())
        }, 300).then(function(res) {
            console.log(res);
        }).catch(function(err) {
            console.log(err);
        })
        setTimeout(() => {
            // resolve()
            reject(new Error())
        }, 500);
    })
    
    console.log(promise);
    setTimeout(() => {
        console.log(promise);
    }, 800);
})();

// promise是状态机
// pedding到resolve之后无法改变