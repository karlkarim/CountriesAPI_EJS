const express = require('express')
const bodyParser = require ('body-parser');
const app = express();
const request = require('request');
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', 'views');




app.use(function(req,res,next){
    res.render('index', {
        pageTitle: "Home page",
        pageNotFound: "Oops. Page Not Found. Try something else",
        pageTest: "Page Test",
        path: ""
    });
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    //console.log(path.join(__dirname, 'views', '404.html'))
})

app.get("/", function(req,res){
    res.sendFile(__dirname+"views/index.ejs");
    console.log(__dirname);
});


 
app.listen(3000, ()=>{
    console.log("Server is running on Port 3000");
})