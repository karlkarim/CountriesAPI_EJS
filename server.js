const express = require('express')
const bodyParser = require ('body-parser');
const app = express();
const request = require('request');
const axios = require("axios");
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', 'views');




app.post("/", function (req, res) {

	let currency = req.body.currency;

	axios
		.get(`https://restcountries.eu/rest/v2/name/${currency}?fullText=true`)
		.then(response => {

			res.render("index", {
				pageTitle: "Home",
				pageNotFound: "Oops. Page Not Found. Try something else",
				pageTest: "Page Test",
				path: "",
				data: response.data[0]
			});

		})
		.catch(error => {
			console.log(error);
		});

});


app.get("/", function (req, res) {
	res.render("index", {
		pageTitle: "Home page",
		pageNotFound: "Oops. Page Not Found. Try something else",
		pageTest: "Page Test",
		path: "",
		data: {
			name: null
		}
	});
});


 
app.listen(3000, ()=>{
    console.log("Server is running on Port 3000");
})