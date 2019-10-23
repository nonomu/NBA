require( 'dotenv' ).config()
const request = require( 'request-promise' )
const port = process.env.SERVER_PORT

class Client {
    static async getJsonRequest( endpoint ) {
        const response = await request( `http://localhost:${ port }/${ endpoint }` )

        if ( response === '' ) {
            return null
        }

        return JSON.parse( response )
    }

    async get( endpoint, json = false ) {
        return await request( `http://localhost:${ port }/${ endpoint }`, { json, timeout: 2000 } ).catch(e => false)
    }

    async fetchStore() {
        return Client.getJsonRequest( 'store' )
    }

    async checkItem( itemName ) {
        return Client.getJsonRequest( `item/${ itemName }` )
    }

    async checkPrice( itemName ) {
        return Client.getJsonRequest( `priceCheck/${ itemName }` )
    }

    async buyItem( itemName ) {
        return Client.getJsonRequest( `buy/${ itemName }` )
    }

    async sale( isAdmin ) {
        return Client.getJsonRequest( `sale/?admin=${ isAdmin }` )
    }
}

module.exports = new Client()
