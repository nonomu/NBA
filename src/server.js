const express = require('express')
const request = require('request')
const path = require('path')
const app = express()
const port = process.env.SERVER_PORT || 3000
const teamToIDs = require('../utils/Teamsid').teamToIDs

app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use(express.static(path.join(__dirname, '..', 'node_modules')))



app.get('/teams/:teamName', function (req, res) {
    const TeamName = req.params.teamName
    console.log(req.params.teamName)
    request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, respones) {
        let TeadData = JSON.parse(respones.body).league.standard
            TeadData = TeadData
            .filter(d => d.teamId === teamToIDs[TeamName])
            .filter(d => d.isActive == true)
            .map(d => {return{firstName:d.firstName , lastName:d.lastName , jersey:d.jersey,pos:d.pos}})   
            res.send(TeadData)        
    })

})




/* -------- Do not remove below this line ----------------*/

let socket = app.listen(port, () => console.log(`Running server on port ${port}`))

module.exports = { app, socket }
