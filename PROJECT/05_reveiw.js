const myname = ["AMIT KUMAR" , "VIKAS YADAV" , "KOMAL CHATURVEDI" , "NARESH YADAV"]
const mywork = ["FULL STACK DEVLOPER" , "DEVLOPER" , "BOSS" , "FREELANCER"]
function run(){
    data.innerHTML = myname[random()]
    work.innerHTML = mywork[dom()]
}
function random(){
    return Math.floor(Math.random() * myname.length)
}
function dom(){
    return Math.floor(Math.random() * myname.length)
}