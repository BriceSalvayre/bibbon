const router = require("express").Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("../../database/mysql");
const fs = require('fs').promises;

router.use(cors());
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

/*router.get("/all" , async (req,res) =>{
    const data =  await req.body;
    console.log(req.body);
    await res.status(200).json(data);
})*/

//route qui fonctionne, affiche les données de la BD
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

//route qui fonctionne avec postman
router.post("/", async (req, res) => {
    const data = await req.body;
    console.log("post");
    //console.log(data);
    mysql.db.query('INSERT INTO people SET ?', data , (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        //console.log(result);
        res.status(200).json(data);
      }
    });
});

//Tentative de route avec l'appli
router.post("/test2", async (req, res) => {
  const data = [{
    user_name: "joe",
    user_password: "password3",
    user_mail: "rien@gmail"
}]
  console.log("post");
  console.log(data);
  mysql.db.query('INSERT INTO people SET ?', data , (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      //console.log(result);
      res.status(200).json(data);
    }
  });
});

//route avec ficher JSON
router.post("/test", async (req, res) => {
  fs.readFile('src/app/pages/subscription/data.json', 'utf8')
  .then((data) => {
  req.users = JSON.parse(data);
  //next();
  mysql.db.query('INSERT INTO people SET ?', req.users , (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      //console.log(result);
      res.status(200).json(data);
    }
  });

  })
  .catch((err) => {
  res.status(500).send(err);
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