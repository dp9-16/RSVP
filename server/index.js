const express = require("express");
const path = require("path");
require("dotenv").config(path.join(__dirname,'../.env'));
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.API_URL, process.env.API_KEY);


const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/guestNum', async (req, res) => {
  try {
    let { data: Guests, err} = await supabase
      .from('Guests')
      .select('guests')
      .eq('attend', true)
    if (err) throw err;
    let sum = 0;
    for (ppl of Guests) {
      sum += ppl['guests'];
    }
    res.status(200).json({sum: sum});
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: 'error'})
  }
})

app.post('/register', async (req, res) => {
  try {
    let { data, error } = await supabase
      .from('Guests')
      .select('*')
      .eq('name',req.body.name)
    if (error) throw error;
    if (!data[0]["id"]) {
      let { dat, err } = await supabase.from('Guests').insert({name: req.body.name, email: req.body.email, attend: req.body.attend, guests: req.body.guests})
      if (err) throw err;
      res.json({match: false});
    } else {
      res.json({match: true});
    }
  } catch (err) {
    console.error(err.message);
    res.status(400).json({error: 'Error'});
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, process.env.DB_Host, () => {
  console.log(`Listening at http://${process.env.DB_Host}:${PORT}`)
});