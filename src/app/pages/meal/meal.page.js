const router = require("express").Router();
//const bodyParser = require("body-parser");

router.get("/", (req,res)=>{
    //res.redirect('meal.page.html');
    res.sendFile('meal.page.html',{root: 'src/app/pages/meal/'});
    console.log("cool");
})

module.exports = router;
