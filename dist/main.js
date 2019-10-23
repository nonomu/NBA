const render = new Renderer()


const fetchTeamData = function () {
    let input = $("#teamNameInput").val()
    $.get(`teams/${input}`, function (TeamData) {
    render.render(TeamData)
    })
}
