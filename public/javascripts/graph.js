function graphSrc(state) {
    const parseData = JSON.parse(state);
    var arrayCountry = [];
    var arrayConfirmed = [];
    var arrayColor = [randomRGB()];
    var arrayBorderColor = [arrayColor];

    console.log(parseData.deaths);
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [parseData.country],
            datasets: [{
                label: 'Confirmed',
                data: [parseData.confirmed],
                backgroundColor: ['rgba(255, 188, 0,0.6)'],
                borderColor: ['rgba(255, 188, 0,1)'],
                borderWidth: 2
            }, {
                label: 'Death',
                data: [parseData.deaths],
                backgroundColor: ['rgba(255, 0, 0,0.6)'],
                borderColor: ['rgba(255, 0, 0,1)'],
                borderWidth: 2
            }, {
                label: 'Recovered',
                data: [parseData.recovered],
                backgroundColor: ['rgba(0, 175, 0,0.6)'],
                borderColor: ['rgba(0, 175, 0,1)'],
                borderWidth: 2
            }],

        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function graphConfirmed(confirmed) {
    const parseData = JSON.parse(confirmed);
    var arrayCountry = [];
    var arrayConfirmed = [];
    var arrayColor = [];
    var arrayBorderColor = [];

    for (const key in parseData) {
        arrayCountry[key] = parseData[key].country
        arrayConfirmed[key] = parseData[key].confirmed
        arrayColor[key] = randomRGB();
        arrayBorderColor[key] = arrayColor[key]
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrayCountry,
            datasets: [{
                label: 'Confirmed',
                data: arrayConfirmed,
                backgroundColor: arrayColor,
                borderColor: arrayBorderColor,
                borderWidth: 2
            }],

        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function graphDeath(death) {
    const parseData = JSON.parse(death);
    var arrayCountry = [];
    var arrayDeath = [];
    var arrayColor = [];
    var arrayBorderColor = [];
    for (const key in parseData) {
        arrayCountry[key] = parseData[key].country
        arrayDeath[key] = parseData[key].death
        arrayColor[key] = randomRGB();
        arrayBorderColor[key] = arrayColor[key]
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrayCountry,
            datasets: [{
                label: 'Death',
                data: arrayDeath,
                backgroundColor: arrayColor,
                borderColor: arrayBorderColor,
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function graphRecovered(recovered) {
    const parseData = JSON.parse(recovered);
    var arrayCountry = [];
    var arrayRecovered = [];
    var arrayColor = [];
    var arrayBorderColor = [];
    for (const key in parseData) {
        arrayCountry[key] = parseData[key].country
        arrayRecovered[key] = parseData[key].recovered
        arrayColor[key] = randomRGB();
        arrayBorderColor[key] = arrayColor[key]
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrayCountry,
            datasets: [{
                label: 'Recovered',
                data: arrayRecovered,
                backgroundColor: arrayColor,
                borderColor: arrayBorderColor,
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

const randomRGB = () => {
    var o = Math.round,
        r = Math.random,
        s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}