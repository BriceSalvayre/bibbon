const router = require("express").Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("../../../database/mysql2");

router.use(cors());
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get("/", (req,res)=>{
    console.log("c'est plutot cool");
})

router.post("/", async (req,res)=>{
    const data = await req.body;

    mysql.db.query('INSERT INTO meal SET ?', data , (err,result) =>{
        if(err){
            res.status(500).json({error: err})
        } else{
            res.status(200).json(data);
        }
    })
})

module.exports = router;