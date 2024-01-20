$(document).ready(function () {

    function fetchData() {
        $.ajax({
            type: "GET",
            url: 'https://geek-jokes.sr.website/api?format=json',
            success: (response, statusText) => {
                $("#joke").text(response.joke)
            },
            failure: (err, statusText) => {
            },
            error: (err) => {
                console.log('err', err)
            }
        })
    }

    fetchData()

    $("#btn").click(fetchData)

});