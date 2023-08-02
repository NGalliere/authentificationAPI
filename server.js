const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "https://tetris-lyart-tau.vercel.app"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Message d'accueil de base de l'API
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tetris API." });
});

// Routes
require('./app/routes/auth.routes.js')(app);
require('./app/routes/user.routes.js')(app);
require('./app/routes/score.routes.js')(app);

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

// Récupération du port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});