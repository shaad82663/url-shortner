const express = require('express')
const validUrl = require('valid-url')
const shortid = require('shortid')

const router = express.Router()  

//Importing model for url
const Url = require('../models/urlModel');

const { shortUrl, redirect } = require('../controllers/urlController');
const {isAuthenticatedUser} = require('../middlewares/auth');

router.route("/shorten").post(isAuthenticatedUser, shortUrl);
router.route("/:code").get(redirect);

module.exports = router;