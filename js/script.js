console.log("hey yoh")
var button = document.getElementById("submit")
button.addEventListener("click",submit)
radio.addEventListener("checked",female)
radio.addEventListener("checked",male)




function submit(event){
    event.preventDefault()
    var day = document.getElementById("day").value
    var year = document.getElementById("year").value
    var month = document.getElementById("month").value
    var female = document.getElementById("female").checked
    var male = document.getElementById("male").checked
console.log(day,year,month,female,)
}


