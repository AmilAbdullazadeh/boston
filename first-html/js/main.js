let time = '00:00:00'

function timer() {
    time = new Date().toLocaleTimeString();
    document.getElementById("body").innerHTML = '<div >\n' +
        '<h3>Time:</h3>\n' +
        '<p>' + time + '</p>\n'
        '</div>';
}

setInterval(timer, 1000)

html
  body
   h3
   p