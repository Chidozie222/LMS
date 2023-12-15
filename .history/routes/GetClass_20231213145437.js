// This page handles the routes for L

// L information backend code 
const { Router } = require("express");
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer');

const GetL = Router()

// calling the schema 
require('../models/Admin/L')

// setting up the schema for the L information backend
const Ls = mongoose.model('Ls')