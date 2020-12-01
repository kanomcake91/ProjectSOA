function graphConfirmed(country) {
    const parseData = JSON.parse(country);
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

function graphDeath(country) {
    const parseData = JSON.parse(country);
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

function graphRecovered(country) {
    const parseData = JSON.parse(country);
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

function chartConfirmed(country) {
    const parseData = JSON.parse(country);
    console.log(parseData);
    var arrayColor = [];
    var arrayBorderColor = [];
    var arrayConfirmed = [parseData[0].monday,
        parseData[0].sunday,
        parseData[0].saturday,
        parseData[0].firday,
        parseData[0].thursday,
        parseData[0].wednesday,
        parseData[0].tuesday
    ];

    for (let index = 0; index < arrayConfirmed.length; index++) {
        arrayColor[index] = randomRGB();
        arrayBorderColor[index] = arrayColor[index]

    }


    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['3/23/20', '3/22/20', '3/21/20', '3/20/20', '3/19/20', '3/18/20', '3/17/20'],
            datasets: [{
                label: 'Confirmed',
                data: arrayConfirmed,
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

function chartDeath(country) {
    const parseData = JSON.parse(country);
    console.log(parseData);
    var arrayColor = [];
    var arrayBorderColor = [];
    var arrayDeath = [parseData[0].monday,
        parseData[0].sunday,
        parseData[0].saturday,
        parseData[0].firday,
        parseData[0].thursday,
        parseData[0].wednesday,
        parseData[0].tuesday
    ];

    for (let index = 0; index < arrayDeath.length; index++) {
        arrayColor[index] = randomRGB();
        arrayBorderColor[index] = arrayColor[index]

    }


    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['3/23/20', '3/22/20', '3/21/20', '3/20/20', '3/19/20', '3/18/20', '3/17/20'],
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

function chartRecovered(country) {
    const parseData = JSON.parse(country);
    console.log(parseData);
    var arrayColor = [];
    var arrayBorderColor = [];
    var arrayRecovered = [parseData[0].monday,
        parseData[0].sunday,
        parseData[0].saturday,
        parseData[0].firday,
        parseData[0].thursday,
        parseData[0].wednesday,
        parseData[0].tuesday
    ];

    for (let index = 0; index < arrayRecovered.length; index++) {
        arrayColor[index] = randomRGB();
        arrayBorderColor[index] = arrayColor[index]

    }


    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['3/23/20', '3/22/20', '3/21/20', '3/20/20', '3/19/20', '3/18/20', '3/17/20'],
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