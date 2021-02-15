const router = require("express").Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("../../database/mysql2");

router.use(cors());
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get("/", (req,res)=>{
    mysql.db.query('SELECT * FROM meal ORDER BY id_meal DESC LIMIT 1;', async (err, rows) => {
        console.log(rows);
        const data = rows;
        await res.status(200).json(data);
    }
)});

module.exports = router;
