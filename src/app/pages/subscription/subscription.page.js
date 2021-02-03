const router = require("express").Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("../../database/mysql");

router.use(cors());
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

/*router.get("/all" , async (req,res) =>{
    const data =  await req.body;
    console.log(req.body);
    await res.status(200).json(data);
})*/

router.get("/", (req, res) => {
  //res.sendFile('subscription.page.html',{root: 'src/app/pages/subscription/'});
    //const data = await req.body;
    console.log("get");
    mysql.db.query('SELECT * from people', async (err, rows) => {
        console.log(rows);
        const data = rows;
        await res.status(200).json(data);
    }
)});
router.post("/", async (req, res) => {
    const data = await req.body;
    console.log("post");
    console.log(data);
    mysql.db.query('INSERT INTO people SET ?', [data], (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        //console.log(result);
        res.status(200).json(data);
      }
    });
});

router.get("/:id/:name/:password", (req,res) => {
    const data =[{
        id : req.params.id,
        name : req.params.name,
        password : req.params.password
    }]
    console.log(data);
    res.status(200).json(data);
    
})
module.exports = router;