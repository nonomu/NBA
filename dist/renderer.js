// Fill in the functions for your Renderer Class

class Renderer {
    _renderPlayers(players) {
        
    }
    _renderFriends(users) {
        let source = $('#friend').html()
        let template = Handlebars.compile(source)
        let newHTML = template({ users })
        $('.friends-container').empty().append(newHTML)
    }

    render(data) {
        this._renderUsers(data.mainUser)
        this._renderFriends(data.friends)
        this._renderQuote(data.quote)
        this._renderPokemon(data.pokemon)
        this._renderMeat(data.aboutme)
    }
}

