// getting csv files and storing the data
const { Router } = require("express");
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer');
const csv = require('c')

const CsvTeacher = Router()

