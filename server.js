require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./config/database');
const logsController = require('./controllers/logsController');
const methodOverride = require('method-override');


// This line of code will run the function below once 
// the connection to MongoDB has been established.
db.once('open', () => {
  console.log('connected to mongo');
});

// View Engine Middleware Configure
const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);
// This line tells the render method the default file extension to look for.
app.set('view engine', 'jsx');
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
app.set('views', './views');

// Custom Middleware
// This enables the req.body after app has been defined
app.use(express.urlencoded({ extended: false })); 
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));
// Custom Middleware
app.use((req, res, next) => {
  console.log('Middleware running...');
  next();
});

// // Routes
app.use('/logs', logsController);

// //Catch all route. If the uses try to reach a route that doesn't match the ones above it will catch them and redirect to the Index page
app.get('/*', (req, res) => {
  // res.send(`
  //   <div>
  //     404 this page doesn't exist! <br />
  //     <a href="/flights">Flights</a> 
  //   </div
  // `);
  res.redirect('/logs');

});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});