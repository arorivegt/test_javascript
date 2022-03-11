function changeBackground(){
    let red = Math.trunc(Math.random() * (255 - 0) + 0);
    let green = Math.trunc(Math.random() * (255 - 0) + 0)
    let blue = Math.trunc(Math.random() * (255 - 0) + 0);
    document.getElementById("myDiv").style.backgroundColor = `rgb(${red},${green},${blue})`
}