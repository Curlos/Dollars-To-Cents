document.getElementById('convert-to-cents').addEventListener('click', () => {
    let dollars = Number(document.getElementById('dollars').value.trim());


    convertDollarsToCents(dollars);
    console.log(dollars);
})