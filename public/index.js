const path = require("path");
const hbs = require("hbs");
const express = require("express"); 
const app = express();

//define paths for express
const publicDirectoryPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../templates/partials")
const viewsPath = path.join(__dirname, "../templates/views");
//setup handlebars engine and views location
app.set("view engine", "hbs"); //Telling express/NODE to use handlebars for templates
app.set("views", viewsPath);//telling express to get templates from templates/views folder
hbs.registerPartials(partialsPath);
app.get("/about/:id", async (req, res) => {
    const name = req.params.id;
    try {
        res.render("index",  {
            title: name
        });
    } catch(error){
        res.status(500).send("Page Not Found");
        
    }
});
app.get("/swag", async (req, res) => {
    const name = req.params.id;
    try {
        res.render("swag");
    } catch(error){
        res.status(500).send("Page Not Found");
        
    }
});
app.get("/thamisucks", (req, res) => {
    res.send("Thami sucks");
});
app.listen(3000, ()=> {
    console.log('Listening on port 3000');
});
//127.0.0.1:3000
//