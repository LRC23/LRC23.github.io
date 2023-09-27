jobSearch();

function comfortLevel (html, css, js) {
    const average = (html + css + js) / 3;
    if (average >= 7) {
        console.log("You are a pro!");
    } else if (average >=4) {
        console.log("Don't worry you're nearly there!");
    } else {
        console.log("If you keep trying you will get there!");
    }
}

comfortLevel(9, 7, 3);

function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.backgroundImage = "none";
    document.getElementById("#").style.color = "white";
}