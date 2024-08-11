const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

const users = ["username", "password"]; // This should be replaced with a proper database
const secretKey = "your-secret-key";

// Passport local strategy for login
passport.use(
  new LocalStrategy(async (username, password, done) => {
    const user = users.find((u) => u.username === username);
    if (!user) {
      return done(null, false, { message: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return done(null, false, { message: "Invalid credentials" });
    }
    return done(null, user);
  })
);

// Serialize user for session
passport.serializeUser((user, done) => {
  done(null, user.username);
});

// Deserialize user from session
passport.deserializeUser((username, done) => {
  const user = users.find((u) => u.username === username);
  done(null, user);
});

// Register route
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  console.log("User registered:", username);
  res.sendStatus(201);
});

// Login route
app.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      console.log("Authentication failed:", info.message);
      return res.status(401).json({ message: info.message });
    }
    const token = jwt.sign({ username: user.username }, secretKey, {
      expiresIn: "1h",
    });
    return res.json({ token });
  })(req, res, next);
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
