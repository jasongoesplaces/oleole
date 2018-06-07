// chart for the first square
var ctx = document.getElementById("myChart1");
console.log(ctx);
var teamData = [];
var teamO = [];
var teamOlabels = [];
var teamD = [];
var teamDlabels = [];
var dataTest = [12,19,2,36]

$("a").click((event) => {
    
    var queryURL = "/api/teams/" + event.target.id;
    var teamData = [];
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then((response) => {
        console.log(response)
        teamData.push(response.wins)
        teamData.push(response.losses)
        teamData.push(response.draws)
        teamData.push(response.points)
        console.log(teamData)
    })

    var queryURL = "/api/offense/" + event.target.id;
    var teamO = [];
    var teamOlabels = [];
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then((response) => {
        console.log(response)
        teamO.push(response[0].goals)
        teamO.push(response[1].goals)
        teamO.push(response[2].goals)
        teamOlabels.push(response[0].player)
        teamOlabels.push(response[1].player)
        teamOlabels.push(response[2].player)
        console.log(teamO)
        console.log(teamOlabels)
    })

    var queryURL = "/api/defense/" + event.target.id;
    var teamD = [];
    var teamDlabels = [];
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then((response) => {
        console.log(response)
        teamD.push(response[0].saves)
        teamDlabels.push(response[0].player)
        if (response.length > 1) {
            teamD.push(response[1].saves)
            teamDlabels.push(response[1].player)
        }
        console.log(teamD)
        console.log(teamDlabels)
    })
});

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Wins", "Losses","Draws", "Points"],
        datasets: [{
            label: 'Wins vs Losses',
            data: teamData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

// chart for the Second square
var chart2 = document.getElementById("myChart2");
console.log(chart2);
var myLineChart = new Chart(chart2, {
    type: 'bar',
    data: {
        labels: teamOlabels,
        datasets: [{
            label: 'Top Players ',
            data: teamO,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

// chart for the third square
var chart3 = document.getElementById("myChart3");
console.log(chart3);
var myDoughnutChart = new Chart(chart3, {
    type: 'doughnut',
    data: data = {
        datasets: [{
            data: [10]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Goals',
            
            
        ]
    },
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    }
});