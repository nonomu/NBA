const changeColor = function (div) {
    div.style.backgroundColor = "#3498db"
}
const fetchFurnitureData = function () {
    let input = $("#furniture-input").val()

    $.get(`priceCheck/${input}`, function (bookData) {
        console.log(bookData)
        $("body").append(`<div>price: ${bookData.price}`)
    })
}
const buyFurniture = function () {
    let input = $("#furniture-input").val()

    $.get(`buy/${input}`, function (furniture) {
        console.log(furniture)
        $("body").append(`<p> Congratulations, you've just bought ${furniture.name} for ${furniture.price}. There are ${furniture.inventory} left now in the store.</p>`)
    })
}
