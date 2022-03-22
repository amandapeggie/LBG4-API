// import app from app.js
const app = require('./app').app;

// use an environment variable for PORT or default to 8080
const PORT = process.env.PORT || 8080;

// create the listener using the port variable above
app.listen(PORT, () => {
    console.log(`API Listening on http://localhost:${PORT}`);
});
