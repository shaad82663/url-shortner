const validUrl = require('valid-url')
const shortid = require('shortid')

const Url = require('../models/urlModel');

//Error Handler for catching async errors separately.
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler');

exports.shortUrl = catchAsyncErrors( async (req, res, next) => {
    const baseUrl = 'http:localhost:4000';
    const {
        longUrl
    } = req.body // destructure the longUrl from req.body.longUrl

    // check base url if valid using the validUrl.isUri method
    if (!validUrl.isUri(baseUrl)) {
        return next(new ErrorHandler('Invalid Base URL', 404));
    }

    // if valid, we create the url code
    const urlCode = shortid.generate()


        // check long url if valid using the validUrl.isUri method
        if (validUrl.isUri(longUrl)) {
                let url = await Url.findOne({
                    longUrl
                })
    
                if (!url){
                    // join the generated short code the the base url
                    const shortUrl = baseUrl + '/' + urlCode
    
                    // invoking the Url model and saving to the DB
                    url = new Url({
                        longUrl,
                        shortUrl,
                        urlCode,
                        date: new Date()
                    })
                    await url.save()
                }
                res.status(200).json({
                    success : true,
                    url
                })
                
        } else {
            res.status(200).json({
                success : false,
                message : 'Invalid URL'
            })
        }

})


exports.redirect = catchAsyncErrors( async (req, res, next) => {
            // find a document match to the code in req.params.code
               const url = await Url.findOne({
                urlCode: req.params.code
            })
            // console.log("url "+url);
            if (url) {
                // when valid we perform a redirect
                  return res.redirect(url.longUrl)
            } else {
                   return next(new ErrorHandler('No URL Found', 404));
            }
})






