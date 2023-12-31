let express= require("express");
let app = express();
let path = require("path");
let port = process.env.PORT || 3000;

app.listen(port, () =>
    console.log("Servidor corriendo en puerto " + port)
);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))
});
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
});
app.use(express.static("public"));