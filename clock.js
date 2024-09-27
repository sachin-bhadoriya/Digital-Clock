setInterval(function () {
    let d = new Date()
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());

    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }

    if (h > 12) {
        document.getElementById("AM").innerHTML = "PM"
    }
    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("second").innerHTML = s;
}, 1000);