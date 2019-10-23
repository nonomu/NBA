const express = require( 'express' )
const path = require('path')
const app = express()
const port = process.env.SERVER_PORT || 3000
const teamToIDs = require('../utils/Teamsid').teamToIDs

app.use(express.static(path.join(__dirname,'..','dist')))
app.use(express.static(path.join(__dirname,'..','node_modules')))



app.get('/teams/:teamName', function (request, response) {
        const TeamName=request.params.teamName
        console.log(teamToIDs[TeamName])
        response.send(teamToIDs[TeamName])
    })




/* -------- Do not remove below this line ----------------*/

let socket = app.listen( port, () => console.log( `Running server on port ${ port }` ) )

module.exports = { app, socket }
