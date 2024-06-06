import express from "express"
import bodyParser from "body-parser"

const app = express()
const PORT = 5000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req,res)=> {
    return res.json({
        "Result": "Success"
        
    })
    
})

const users = ["asnaff"]

app.get('/users', (req,res) => {
    return res.send(users)
})


app.post('/users', (req,res) => {
    console.log("params", req.body)
    const newUser = req.body.username
    users.push(newUser)
    return res.send("success")
})

app.listen( PORT, ()=> {
    console.log("Backend is running on", PORT)
})
