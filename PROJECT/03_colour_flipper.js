let raang = ["maroon" , "red" , "purple" , "fuchsia" , "green" , "lime" , "	olive" , "yellow" , "navy" , "blue" , "orange"]
function color() {
    let mynum = anynumber();
    cha.style.backgroundColor = raang[mynum]
    col.innerHTML = raang[mynum]
}
function anynumber(){
    return Math.floor(Math.random() * raang.length)
}
