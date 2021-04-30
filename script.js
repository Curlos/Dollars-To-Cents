document.getElementById('convert-to-cents').addEventListener('click', () => {
    let dollars = Number(document.getElementById('dollars').value.trim());


    convertDollarsToCents(Math.round(dollars * 100));
})

const convertDollarsToCents = (dollars) => {
    document.getElementById('totalCents').innerHTML = 'Total Cents: ' + dollars;

    let coins = {
        25: 0,
        10: 0,
        5: 0,
        1: 0,
    }

    let coinsArr = Object.keys(coins)
    coinsArr.reverse()

    let i = 0

    while (dollars > 0) {
        console.log(dollars);
        i++;
        for (let key of coinsArr) {
            let coin = Number(key);

            if(dollars - coin >= 0) {
                dollars = Math.round(dollars - coin);
                coins[key] += 1
                break;
            }
        }
    }


    console.log(Object.values(coins));
    console.log(Object.entries(coins));
}