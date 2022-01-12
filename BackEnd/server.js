const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mongoose = require('mongoose');

const strConnection = 'mongodb+srv://admin:admin@cluster0.cmmhd.mongodb.net/rolebook?retryWrites=true&w=majority'
                       
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(strConnection);
}

const roleSchema = new mongoose.Schema({
    Name:String,
    Id:String,
    Description:String,
    Grade:String,
    Teacher:String
});

const roleModel = mongoose.model('role', roleSchema);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/roles', (req,res)=>{
    console.log(req.body);
    console.log(req.body.Name);
    console.log(req.body.Id);
    console.log(req.body.Description);
    console.log(req.body.Grade);
    console.log(req.body.Teacher);

    roleModel.create({
        Name:req.body.Name,
        Id:req.body.Id,
        Description:req.body.Description,
        Grade:req.body.Grade,
        Teacher:req.body.Teacher
    });
    res.send('Data Sent to Server!')
})

app.get('/api/roles/:id',(req, res)=>{
    console.log(req.params.id);

    roleModel.findById(req.params.id,(error,data)=>{
        res.json(data);
    })
})

app.delete('/api/roles/:id', (req,res)=> {
    console.log('Delete: ' +req.params.id);

    roleModel.deleteOne({_id: req.params.id}, 
        (error, data)=>{
            if (error)
                res.send(error);
            res.send(data);
        })
})

app.put('/api/roles/:id',(req, res)=>{
    console.log('update');
    console.log(req.body);
    console.log("Updating: " + req.params.id);

    roleModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })

})

app.get('/api/roles', (req, res) => {
    roleModel.find((err, data)=>{
        res.json(data);
    })
                
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})