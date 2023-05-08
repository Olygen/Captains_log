const express = require('express'); 
const router = express.Router(); 
const Log = require('../models/log'); 

// I.N.D.U.C.E.S. for FLIGHTS
//=========================

// Index
  
  router.get('/', async (req, res) => {
    // console.log('Index Controller Func. running...');
    try {
      const foundLog = await Log.find({});
      res.status(200).render('Index', 
      { log: foundLog }
      );
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  // New // renders a form to create a new flight
  router.get('/new', (req, res) => {
    res.render('New');
  });

module.exports = router;