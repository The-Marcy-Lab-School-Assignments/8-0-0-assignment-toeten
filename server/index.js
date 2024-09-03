const express = require('express')
const app = express()

//controllers
const serveSlash = (req,res,next) => {
  res.sendFile(__dirname + '/index.html')
}

const serveAbout = (req, res, next) => {
  res.send(`
    <h1>About me</h1>
    <p>I am so cool like....</p>
  `);
};


const serveWhat = (req,res,next) => {
  const {name, favFood} = req.query
  res.send(`My name is ${name} and my favorite food is ${favFood}`)
}

const serveData = (req,res,next) => {
  const coolPeople = [{name: 'nicole'}, {name: 'javier'}, {name: 'noe'}]
  res.send(coolPeople)
}

//endpoints
app.get('/', serveSlash)
app.get('/about', serveAbout)
app.get('/api/what', serveWhat)
app.get('/api/data', serveData)

//listen!

const port = '8080'

app.listen(port, () => {
  console.log(`You are now listening to http://localhost:${port}`)
})