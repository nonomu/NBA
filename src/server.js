require( 'dotenv' ).config()
const express = require( 'express' )
const path = require('path')
const app = express()
const testRoutes = require( '../utils/routes' )
const port = process.env.SERVER_PORT || 3000
const store = require( '../utils/store' )
const books = require( '../utils/books' )


app.use(express.static(path.join(__dirname,'..','dist')))
app.use(express.static(path.join(__dirname,'..','node_modules')))
// Exercise 1 serve dist and node_modules here



/* -------- Do not remove above this line ----------------*/



// Spot check 1 - your code here
// app.get('/life', function (request, response) {
//     response.send(`42`)
// })

// Spot check 2 - your code here
// app.get('/users/:username', function (request, response) {
//     response.send(users[request.params.username])
// })


// Spot check 3 - your code here

// app.get('/details', function (request, response) {
//     let params = request.query
//     console.log(params.city)
//     response.send(params)

// })

// Spot check 4 - your code here

// app.get(`/books/:bookid`, function (request, response) {
//     let book = request.params.bookid
//     response.send(data[book])

// })

// Exercise 1 - your code here
app.get( '/sanity', function (request, response) {
    response.send("Server is up and running smoothly")
})

// Exercise 2 - your code here

app.get('/priceCheck/:name', function (request, response) {
    let name = request.params.name
    const obj= store.find(s => s.name=== name)
    if(obj)
    {
    console.log({"price" : obj.price})
    response.send({"price" : obj.price})
    }
    else{
        response.send({"price" : null})
    }
})

// Exercise 4 - your code here
app.get('/buy/:name', function (request, response) {
    let name = request.params.name
    const obj= store.find(s => s.name === name)
    if(obj.inventory)
    {
    obj.inventory--
    response.send(obj)
    }
    else{
        response.send("Ran out of stock" )
    }
})


// Exercise 6 - your code here
/
app.get('/sale', function (request, response) {
    let bool = request.query.admin
    console.log(bool )
    
    if(bool === "true")
    {
        store.forEach(s => { 
            if(s.inventory>10)
            {
                s.price/=2
            }
        })
    }
    response.send( store )
})




/* -------- Do not remove below this line ----------------*/

let socket = app.listen( port, () => console.log( `Running server on port ${ port }` ) )

module.exports = { app, socket }
