$(document).ready(function () {

    var colors = '0123456789abcdef'
    var randomColor = '#'

    function generateColor() {
        for (let i = 0; i < 6; i++) {
            var randomIndex = Math.floor(Math.random() * 16)
            randomColor += colors[randomIndex]
        }
    }

    function setColors(color) {
        $('#inputField').val(color)
        $('#inputField').css({color: color, borderColor: color})
        $(".copy-btn").css({backgroundColor: color})
        $(".color-preview").css({backgroundColor: color})
    }

    function message() {
        $(".alert-msg").addClass('slide-effect')
        setTimeout(function() {
            $(".alert-msg").removeClass('slide-effect')
        }, 2000)
    }

    $(".generate-btn").on("click", function () {
        generateColor()
        setColors(randomColor)
    })


    $('.copy-btn').on('click', function () {
        $("#inputField").select();
        document.execCommand('copy')

        $('.code').text($('#inputField').val())
        message()
    })
})