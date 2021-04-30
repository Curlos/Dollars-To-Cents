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

    let coinsUsed = Object.values(coins);

    document.getElementById('quarters').innerHTML = 'Quarters: ' + coinsUsed[3];
    document.getElementById('dimes').innerHTML = 'Dimes: ' + coinsUsed[2];
    document.getElementById('nickels').innerHTML = 'Nickels: ' + coinsUsed[1];
    document.getElementById('pennies').innerHTML = 'Pennies: ' + coinsUsed[0];

    console.log(Object.entries(coins));
}