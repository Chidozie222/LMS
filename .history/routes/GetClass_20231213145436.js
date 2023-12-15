// This page handles the routes for 

//  information backend code 
const { Router } = require("express");
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer');

const Get = Router()

// calling the schema 
require('../models/Admin/')

// setting up the schema for the  information backend
const s = mongoose.model('s')