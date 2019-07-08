var express = require("express");
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));

var session = require('express-session');

app.use(session({
    secret: "shhh"
}));

app.get("/", function(request, response){
    if (request.session.count){
        request.session.count ++;
    }
    else {
        request.session.count = 1;
    }
    response.render("main", { count: request.session.count });
});

app.get("/plus_two", function(request, response){
    request.session.count ++;
    response.redirect("/");
})

app.get("/reset", function(request, response){
    request.session.count = 0;
    response.redirect("/");
})

app.listen(8000, function() {
    console.log("listening on port 8000");
  })