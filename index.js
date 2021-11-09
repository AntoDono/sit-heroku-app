const express = require("express")
const port = 3000

const app = express()

app.get('/', (req, res) => {
    res.send("Hello from sit-heroku-tutorial-test2")
})

app.get('/favicon.ico', (req,res) => res.status(204))

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
