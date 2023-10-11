const express = require("express");

const router = express.Router();

const {
  handleGenerateNewShortURL,
  redirectandanalytics,
} = require("../controllers/url");
const shortUrl = require("../models/url");
router.get("/", async(req,res)=>{
    const shortUrls = await shortUrl.find()

res.render('index', { shortUrls: shortUrls })
});

try{
    router.post("/", handleGenerateNewShortURL);

}catch(err){
console.log(err)
}

router.get("/:shortId",redirectandanalytics );

module.exports = router;
