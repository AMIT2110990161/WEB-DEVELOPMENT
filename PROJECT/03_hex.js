let numletter=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
function hex() {
    let hash = "#"
    for(let i = 0; i<6; i++){
        hash += numletter[random()]
    }
    cha.style.backgroundColor = hash
    col.innerHTML = hash
}
function random() {
    return Math.floor(Math.random()*numletter.length)
}