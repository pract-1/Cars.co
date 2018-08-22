require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const controller = require("./controllers/controller");
const session = require("express-session");
const passport = require("passport");
const strategy = require("./strategy");
const { logout, login, getUser } = require("./auth_controller");
const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(e => console.log(e));

//----------------Session-----------------

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2 //2 weeks
    }
  })
);

//----------------Passport-----------------

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

passport.serializeUser((user, done) => {
  const db = app.get("db");
  db.get_user_by_authid(user.id)
    .then(response => {
      if (!response[0]) {
        console.log("loooooog", user.displayName, user.id);
        db.add_user_by_authid([user.displayName, user.id])
          .then(res => done(null, res[0]))
          .catch(err => done(err, null));
      } else {
        return done(null, response[0]);
      }
    })
    .catch(err => done(err, null));
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get("/login", login);
app.post("/api/logout", logout);
app.get("/api/me", getUser);

app.get("/api/inventory", controller.getAll); //used
app.post("/api/product", controller.create);
app.delete("/api/product/:id", controller.deleteProduct);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening ${port}`);
});
