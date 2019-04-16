import express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

const app: express.Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));

const port: number = 3000;

app.get('/cidades', function (req, res) {
    res.send([
        {
            "id": 1,
            "name": "Jaraguá do Sul"
        },
        {
            "id": 2,
            "name": "Joinville"
        },
        {
            "id": 3,
            "name": "Blumenau"
        },
        {
            "id": 4,
            "name": "Pomerode"
        },
    ]);
});

app.get('/bairros/:id', function (req, res) {
    const list: any[] = []; 
    const values = [
        {
            "id": 1,
            "codCidade": 1,
            "name": "Bairro 1",
            "value": 1.5
        },
        {
            "id": 2,
            "codCidade": 2,
            "name": "Bairro 2",
            "value": 2.5
        },
        {
            "id": 3,
            "codCidade": 3,
            "name": "Bairro 3",
            "value": 3.5
        },
        {
            "id": 4,
            "codCidade": 4,
            "name": "Bairro 4",
            "value": 4.5
        }
    ];

    values.map(i => {
        if (i.codCidade == req.params.id) {
            list.push(i);
        }
    });

    res.send(list);
});

app.post("/logon", function(req, res){
    
    if (req.body.userName == 'admin@senai' && req.body.password == '1234'){
        res.send(
                    {
                        userName : req.body.userName,
                        password : req.body.password
                    }
                  );
    } else {
        res.status(401).send({});
    }

});

app.post("/usuario", function(req, res){

    if( res.status(200)){
        res.send(
            {
                "IdUsuario": 1,
                "Nome": "Usuario 1",
            }
        )
    }
});

app.listen(port, function () {
console.log(`Example app listening on port ${port}!`);
});