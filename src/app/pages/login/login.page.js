const router = require("express").Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("../../database/mysql2");

router.use(cors());
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get("/all", (req,res)=>{
    mysql.db.query('SELECT * FROM users;', async (err, rows) => {
        const data = rows;
        await res.status(200).json(data);
    }
)});

router.get("/:user", (req,res)=>{
    mysql.db.query('SELECT user_mail, user_password FROM users WHERE user_mail = "' + req.params.user +'";',async (err,rows)=>{
        const data = rows;
        await res.status(200).json(data);
    })
})



module.exports = router;