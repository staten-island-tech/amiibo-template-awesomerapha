const path = require("path");
const express = require("express"); 
const app = express();

//define paths for express
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
//setup handlebars engine and views location
app.set("views engine", "hbs"); //Telling express/NODE to use handlebars for templates
app.set("views", viewsPath);//telling express to get templates from templates/views folder
app.get("", async (req, res) => {
    try {
        res.render("index");
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