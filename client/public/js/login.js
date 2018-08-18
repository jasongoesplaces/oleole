

$(".submit").click(function(event) {
    event.preventDefault()
    
    var queryURL = "http://localhost:8080/api/users/"
    $.ajax({
        url: queryURL,
        method: "POST"
    }).then(function(result) {
        // db.Users.find({where: {username: username, pass: password}, function(err, user) {
    console.log(result)
    //window.location = "/dashboard"
        // }})
    });
});