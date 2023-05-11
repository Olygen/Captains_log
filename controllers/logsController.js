const express = require('express'); 
const router = express.Router(); 
const Log = require('../models/log'); 

// Seed Route
router.get('/seed', async (req, res) => {
  try {
    await Log.create([
      {
        title: '3 days before start',
        entry: 'embark barrels of wine',
        // shipIsBroken: false,
      },
      {
        title: '2 days before start',
        entry: 'embark barrels of wine',
        // shipIsBroken: false,
      },
      {
        title: '1 days before start',
        entry: 'embark barrels of wine',
        // shipIsBroken: false,
      },
    ]);
    res.redirect('/logs');
  } catch (err) {
    res.status(400).send(err);
  }
});

// I.N.D.U.C.E.S. for FLIGHTS
//=========================

// Index
  
router.get('/', async (req, res) => {
  // console.log('Index Controller Func. running...');
  try {
    const foundLog = await Log.find({});
    res.status(200).render('Index', { logs: foundLog });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New // renders a form to create a new flight
router.get('/new', (req, res) => {
  res.render('New');
});

// Delete // recieves the id of the log document and deletes it, after that it will redirect back to the Index.
router.delete('/:id', async (req, res) => {
  try {
    await Log.findByIdAndDelete(req.params.id); // grabbing _id from params, it is given value on the Index.jsx page 
    res.status(200).redirect('/logs');
  } catch (err) {
    res.status(400).send(err);
  }
});

  // Create // recieves info from new route to then create a new log w/ it
  router.post('/', async (req, res) => {
  try {
      const newLog = await Log.create(req.body);
      console.log(newLog);
      //console.log(logs);
      // redirect is making a GET request to the path logs
      res.redirect(`/logs/${newLog._id}`);
  } catch (err) {
      res.status(400).send(err);
  }
  });

  // Show // displays one log by id
  router.get('/:id', async (req, res) => {
  try {
    const foundLog = await Log.findById(req.params.id);
    res.status(200).render('Show', { log: foundLog });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;