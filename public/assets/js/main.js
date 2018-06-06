// chart for the first square
var ctx = document.getElementById("myChart1");
console.log(ctx);

$(".submit").click(function(event) {
    
    var queryURL = "/api/users/"
    $.ajax({
        url: queryURL,
        method: "POST"
    }).then(function(username, password, cb) {
        db.Users.find({where: {username: username, pass: password}, function(err, user) {
            passport.authenticate("local", { failureRedirect: "/login", successRedirect: "/dashboard"})
        }})
    });
});

$("a").click(function(event) {
    
    var queryURL = "/api/teams/" + event.target.id;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)
    })
});





var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Wins", "Losses","Draws", "Points"],
        datasets: [{
            label: 'Wins vs Losses',
            data: [12, 19,2,36],
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
        labels: ["Player1", "Player2","Player3"],
        datasets: [{
            label: 'Top Players ',
            data: [1, 2,3],
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