


function hideQuestionShowLikert() {
    var x = document.getElementById('hide');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    var y = document.getElementById('hide1');
    if (y.style.display === 'none') {
        y.style.display = 'block';
    } else {
        y.style.display = 'none';
    }
    var z = document.getElementById('show');
    if (z.style.display ==='none') {
    	z.style.display = 'block';
    } else {
    	z.style.display = 'none';
    }
}

var n = document.getElementById("colorcircle");
function changeColorSolo(val,color){
var n = document.getElementById("colorcircle");
    switch (color) {
        case 0: red = val; break;
        case 1: green = val; break;
        case 2: blue = val; break;
    }    n.style.backgroundColor='rgba('+red+',0,0,1)';
}

function changeColor(val,color){
var m = document.getElementById("colorcircle1");
    switch (color) {
        case 0: red = val; break;
        case 1: green = val; break;
        case 2: blue = val; break;
    }    m.style.backgroundColor='rgba(0,0,'+blue+',1)';
}

function enableField() {
	document.getElementById('submitbutton').disabled = false;
}