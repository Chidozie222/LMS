// This page handles the routes for Class

// Class information backend code 
const { Router } = require("express");
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer');

const GetClass = Router()

// calling the schema 
require('../models/Admin/Class')

// setting up the schema for the Class information backend
const Classes = mongoose.model('Classes')