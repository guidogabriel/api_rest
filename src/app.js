//const express = require('express');
import express from 'express'

const app = express();

app.get('/', (req, res) => {
  res.send("teste ok ")
})

app.listen(3002, () => {
  console.log('escutando');
});
