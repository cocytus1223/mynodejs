(async function () {
    await findJob()
    console.log('trip')
})()

async function findJob() {

    try {
        // 进行三轮面试
        await interview(1);
        await interview(2);
        await interview(3);
        try {
            // 征求多个家庭成员的意见
            await Promise.all([
                family('father').catch(() => { /* 老爸说的话当耳边风 */ }),
                family('mother'),
                family('wife'),
            ])
        } catch (e) {
            e.round = 'family'
            throw e
        }
        console.log('smile')

    } catch (e) {
        console.log('cry at ' + e.round)
    }
}

function interview(round) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                const error = new Error('failed');
                error.round = round;
                reject(error);

            } else {
                resolve('success');
            }
        }, 500)
    })
}


function family(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                const error = new Error('disagree');
                error.name = name;
                reject(error);

            } else {
                resolve('agree');
            }
        }, Math.random() * 400)
    })
}