// chart for the first square
var ctx = document.getElementById("myChart1");
console.log(ctx);
var teamData = [];
var teamO = [];
var teamOlabels = [];
var teamD = [];
var teamDlabels = [];
var dataTest = [];
var credits = 0

$("#userCredits").empty().append(credits)

function getCredits(newCredits){
    credits = newCredits
    console.log(credits)
    $("#userCredits").empty().append(credits)
}

$(".betBtn").click((event) => {
    event.preventDefault()
    var newCredits = credits - 5
    console.log(newCredits)
    getCredits(newCredits)
})

$("#credits1").click((event) => {
    event.preventDefault()
    var newCredits = credits + 5
    console.log(newCredits)
    getCredits(newCredits)
})


$("#credits2").click((event) => {
    event.preventDefault()
    var newCredits = credits + 10
    getCredits(newCredits)
})


$("#credits3").click((event) => {
    event.preventDefault()
    var newCredits = credits + 15
    getCredits(newCredits)
})


$("#accountBtn").click((event) => {
    event.preventDefault()

    var queryURL = "/api/users/1"
    $.ajax({
        url:queryURL,
        method:"GET"
    }).then((response) => {
        console.log(response)

        $("#myAccount").empty().append(response.username)
    })
})

$(".teamStats").click((event) => {
    event.preventDefault()
    
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
        myChart.data.datasets[0].data = teamData
        myChart.update();
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
        myLineChart.data.datasets[0].data = teamO
        myLineChart.data.labels = teamOlabels
        myLineChart.update();
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
        myDoughnutChart.data.datasets[0].data = teamD
        myDoughnutChart.data.labels = teamDlabels
        myDoughnutChart.update();
    })
});
//Images function
function getImages (){
        //Images Array
        var images =[ "AtlantaUnitedFC.png","ChicagoFire.png","ColoradoRapids.png","ColumbusCrewSC.png",
        "DCUnited.png","FCDallas.png","HoustonDynamo.png","LAGalaxy.png",
        "LosAngelesFootballClub.png","MinnesotaUnitedFC.png","MontrealImpact.png",
        "NewEnglandRevolution.png","NewYorkCityFC.png","NewYorkRedBulls.png", "OrlandoCitySC.png",
        "PhiladelphiaUnion.png","PortlandTimbers.png","RealSaltLake.png","SanJoseEarthquakes.png",
        "SeattleSoundersFC.png","SportingKansasCity.png","TorontoFC.png","VancouverFC.png"]
        //Atlanta United
        $('#1').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[0]+'">')
        });
        //Sporting Kansas City
        $('#2').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[20]+'">')
        });
        //Columbus Crew SC
        $('#3').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[3]+'">')
        });
        //New York City FC
        $('#4').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[12]+'">')
        });
        //New York Red Bulls
        $('#5').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[13]+'">')
        });
        //Los Angeles Football Club
        $('#6').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[8]+'">')
        });
        //Portland Timbers
        $('#7').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[16]+'">')
        });
        //FC Dallas
        $('#8').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[5]+'">')
        });
        //Orlando City SC
        $('#9').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[14]+'">')
        });
        //Houston Dynamo
        $('#10').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[6]+'">')
        });
        //New England Revolution
        $('#11').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[11]+'">')
        });
        //Vancouver Whitecaps FC
        $('#12').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[22]+'">')
        });
        //LA Galaxy
        $('#13').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[7]+'">')
        });
        //Minnesota United FC
        $('#14').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[9]+'">')
        });
        //Real Salt Lake
        $('#15').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[17]+'">')
        });
        //Philadelphia Union
        $('#16').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[15]+'">')
        });
        //Chicago Fire
        $('#17').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[1]+'">')
        });
        //Toronto FC
        $('#18').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[21]+'">')
        });
        //Montreal Impact
        $('#19').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[10]+'">')
        });
        //DC United
        $('#20').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[4]+'">')
        });
        //San Jose Earthquakes
        $('#21').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[18]+'">')
        });
        //Seattle Sounders FC
        $('#22').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[19]+'">')
        });
        //Colorado Rapids
        $('#23').click(function(){
            $('.thumbnail1').empty().append('<img src="/assets/Images/'+images[2]+'">')
        });
    }
    
getImages();
// Betting Function
 function addCredits(){
// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var results = [1, 2, 3];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var credits= 0
$('#1').click(function(){
    $('.thumbnail').empty().append('<img src="/assets/Images/'+images[0]+'">')
});
}
function betCredits(){

}

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Wins", "Losses","Draws", "Points"],
        datasets: [{
            label: 'Wins vs Losses',
            data: teamData,
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(226, 255, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(226, 255, 64, 1)',
                'rgba(54, 162, 235, 1)',
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
            label: 'Goals',
            data: teamO,
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
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
    type: 'bar',
    data: data = {
        labels: teamDlabels,
        datasets: [{
            label: 'Saves',
            data: teamD,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
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

M.toast({html: 'I am a toast!'})