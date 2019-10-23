const fetchTeamData = function () {
    let input = $("#teamNameInput").val()
    $.get(`teams/${input}`, function (TeamData) {
        TeamData.forEach(t=> {
            $("#players-container").append(`<div> TeamID: ${t.firstName} </div>`) })
      
    })
}
