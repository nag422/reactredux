// For Newer version of node >= 12.0.0 version
// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';
// For Newer version of node >= 12.0.0 version
// For Olders version of node <= 12.0.0 version
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(bodyParser.json({limit:"30mb", extended:  true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:  true}))
app.use(cors());