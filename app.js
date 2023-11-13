let express= require("express");
let app = express();
let path = require("path");

app.listen(3000, () =>
    console.log("Servidor corriendo")
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